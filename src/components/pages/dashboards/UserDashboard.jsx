import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc, query, where } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useAuth } from "../../../context/AuthContext";

const UserDashboard = () => {
  const { currentUser, deleteAccount, logOut } = useAuth();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingAccount, setDeletingAccount] = useState(false);

  useEffect(() => {
    const fetchUserItems = async () => {
      try {
        const q = query(collection(db, "items"), where("createdBy", "==", currentUser.uid));
        const snap = await getDocs(q);
        setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (currentUser) fetchUserItems();
  }, [currentUser]);

  const handleDeleteItem = async (id) => {
    if (window.confirm("Delete this item permanently?")) {
      await deleteDoc(doc(db, "items", id));
      setItems((prev) => prev.filter((i) => i.id !== id));
    }
  };

  const handleDeleteAccount = async () => {
    if (window.confirm("Delete your account permanently? This cannot be undone.")) {
      setDeletingAccount(true);
      try {
        await deleteAccount();
      } catch {
        alert("Please re-login before deleting your account.");
        setDeletingAccount(false);
      }
    }
  };

  const stats = [
    { label: "My Items", value: items.length, icon: "📦", color: "from-indigo-500 to-blue-600" },
    { label: "Active", value: items.filter((i) => i.status === "Active").length, icon: "✅", color: "from-emerald-500 to-teal-600" },
    { label: "Pending", value: items.filter((i) => i.status === "Pending").length, icon: "⏳", color: "from-amber-500 to-orange-600" },
    { label: "Role", value: "User", icon: "👤", color: "from-violet-500 to-purple-600" },
  ];

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
    </div>
  );

  return (
    <div className="pt-28 pb-16 px-6 min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-4xl font-black text-slate-900 dark:text-white">My Dashboard</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Welcome, <span className="font-bold text-indigo-600 dark:text-indigo-400">{currentUser?.displayName || currentUser?.email}</span></p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link to="/items/create" className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-600/30 text-sm">+ New Item</Link>
            <Link to="/dashboard/chat" className="bg-violet-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-violet-700 transition shadow-lg shadow-violet-600/30 text-sm">💬 Chat</Link>
            <button onClick={handleDeleteAccount} disabled={deletingAccount} className="bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 px-5 py-2.5 rounded-xl font-bold hover:bg-rose-100 dark:hover:bg-rose-900/50 transition text-sm disabled:opacity-60">
              🗑️ Delete Account
            </button>
            <button onClick={logOut} className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 px-5 py-2.5 rounded-xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition text-sm">
              Sign Out
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
          {stats.map((s) => (
            <div key={s.label} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700 relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${s.color} opacity-10 rounded-bl-full`}></div>
              <div className="text-3xl mb-2">{s.icon}</div>
              <p className="text-3xl font-black text-slate-900 dark:text-white">{s.value}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 overflow-hidden">
          <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-slate-700">
            <h2 className="text-lg font-bold text-slate-800 dark:text-white">My Items</h2>
            <Link to="/items/create" className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-indigo-700 transition">+ Create</Link>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-16 px-6">
              <div className="text-5xl mb-4">📭</div>
              <p className="text-slate-500 dark:text-slate-400 font-medium text-lg mb-2">No items yet</p>
              <p className="text-sm text-slate-400 dark:text-slate-500 mb-6">Create your first item to get started.</p>
              <Link to="/items/create" className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition inline-block">Create Item</Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="text-left px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Title</th>
                    <th className="text-left px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Category</th>
                    <th className="text-left px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Status</th>
                    <th className="text-left px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                  {items.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition">
                      <td className="px-6 py-4 font-semibold text-slate-800 dark:text-white">{item.title}</td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{item.category}</td>
                      <td className="px-6 py-4">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${item.status === "Active" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300" : "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300"}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-3">
                          <Link to={`/items/${item.id}`} className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline">View</Link>
                          <Link to={`/items/${item.id}/edit`} className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline">Edit</Link>
                          <button onClick={() => handleDeleteItem(item.id)} className="text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
