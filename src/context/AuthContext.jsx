import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  deleteUser,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, getDoc, deleteDoc, serverTimestamp } from "firebase/firestore";
import { auth, db, googleProvider } from "../firebase/config";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  const saveUserToFirestore = async (user, extraData = {}) => {
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);
    if (!userSnap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || extraData.displayName || "",
        photoURL: user.photoURL || "",
        role: extraData.role || "user",
        createdAt: serverTimestamp(),
      });
      return extraData.role || "user";
    } else {
      return userSnap.data().role;
    }
  };

  const fetchUserRole = async (uid) => {
    try {
      const userSnap = await getDoc(doc(db, "users", uid));
      if (userSnap.exists()) {
        return userSnap.data().role;
      }
    } catch {
      return "user";
    }
    return "user";
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        const role = await fetchUserRole(user.uid);
        setUserRole(role);
      } else {
        setUserRole(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signUp = async (email, password, displayName, role = "user") => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(result.user, { displayName });
    await saveUserToFirestore(result.user, { displayName, role });
    setUserRole(role);
    return result;
  };

  const signIn = async (email, password) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const role = await fetchUserRole(result.user.uid);
    setUserRole(role);
    return result;
  };

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    const role = await saveUserToFirestore(result.user);
    setUserRole(role);
    return result;
  };

  const logOut = () => signOut(auth);

  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  const deleteAccount = async () => {
    if (currentUser) {
      const uid = currentUser.uid;
      await deleteUser(currentUser);
      try {
        await deleteDoc(doc(db, "users", uid));
      } catch (err) {
        console.error("Failed to delete user document from Firestore:", err);
      }
    }
  };

  const isAdmin = userRole === "admin";
  const isAuthenticated = !!currentUser;

  const value = {
    currentUser,
    userRole,
    isAdmin,
    isAuthenticated,
    signUp,
    signIn,
    signInWithGoogle,
    logOut,
    resetPassword,
    deleteAccount,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
