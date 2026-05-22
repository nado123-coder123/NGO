# Application Deployment Report

**Live URL**: [https://ngo-smart-aid.vercel.app/](https://ngo-smart-aid.vercel.app/)
**GitHub Repository**: [https://github.com/70147071-blip/NGO-Smart-aid](https://github.com/70147071-blip/NGO-Smart-aid)

## Development Tasks Completed

### Task 1: Firebase Authentication Integration
Implemented full Firebase Authentication with the following functionalities:
- **Email & Password Sign Up**: Users can register with email and password via `/auth/register`. User profile is created with `createUserWithEmailAndPassword` and `updateProfile`.
- **Email & Password Sign In**: Secure login via `/auth/login` using `signInWithEmailAndPassword` with comprehensive error handling.
- **Google Sign-In**: Integrated `GoogleAuthProvider` with `signInWithPopup` for one-click Google authentication on both login and register pages.
- **Sign Out**: Implemented via `signOut` from Firebase Auth, accessible from the Navbar and both dashboards.
- **Reset Password**: Dedicated `/auth/forgot-password` page using `sendPasswordResetEmail` to send password recovery emails.
- **Delete Account**: Users can permanently delete their account using `deleteUser` from either the Admin or User Dashboard.

### Task 2: Store User Data in Firestore
On successful registration or Google sign-in:
- User information (uid, email, displayName, photoURL, role, createdAt) is stored in the Firestore `users` collection using `setDoc`.
- Duplicate prevention is enforced by checking `getDoc` before writing — if a document with the user's UID already exists, no new record is created.
- The existing role is preserved for returning Google sign-in users.

### Task 3: Role-Based Protected Routing
Implemented role-based access control using React Router DOM:
- **Admin Dashboard** (`/dashboard/admin`): Full management panel with stats overview, user list table, and all-items management with edit/delete capabilities.
- **User Dashboard** (`/dashboard/user`): Personal dashboard displaying only the authenticated user's own items with CRUD actions.
- **Protected Routes**: `ProtectedRoute` guard redirects unauthenticated users to `/auth/login`. `AdminRoute` guard additionally verifies `role === "admin"` and redirects non-admins to `/dashboard/user`.
- Unauthorized access is handled with automatic redirects to the appropriate page.

### Task 4: Secure CRUD Access Control
Extended the CRUD application with ownership-based access control:
- **Create**: Only authenticated users can create items. Each item stores `createdBy` (uid) and `createdByEmail` for ownership tracking.
- **Read**: All items are publicly viewable. Item cards display the creator's email.
- **Update**: Edit functionality is restricted — users can only edit their own items. Admins can edit any item. Non-owners are redirected away from the edit page.
- **Delete**: Delete buttons are conditionally rendered based on ownership. Admins can delete any record; regular users can only delete their own.
- UI dynamically updates based on user role, showing or hiding Edit/Delete actions accordingly.

### Task 5: Integrated Chat Application
Implemented a real-time chat system using Firebase Firestore:
- **Real-Time Messaging**: Uses Firestore `onSnapshot` listener for instant message delivery without page refresh.
- **User-to-User Chat**: Authenticated users can communicate with any other registered user. A searchable user list is displayed in the sidebar from the Firestore `users` collection.
- **Chat History**: Previous messages are loaded and displayed chronologically when a chat is opened.
- **Chat Features**: Clicking a user opens a dedicated chat window. Messages display sender name, text content, and timestamp. Chat IDs are generated deterministically from sorted UIDs to ensure consistent conversation threads.
- Responsive design with mobile sidebar toggle for seamless experience on all devices.

### Task 6: Deployment
- Prepared production bundle successfully via Vite.
- Deployed the React application to **Vercel** for reliable, zero-configuration hosting.
- The web app is publicly accessible and securely served over an HTTPS domain via Vercel.

### Task 7: GitHub Repository
- Source code is actively managed through Git CLI.
- All modifications covering logic, user interface and configurations are pushed safely to the `main` branch of the provided GitHub repository.
- Maintained structured sub-directories ensuring the separation of layouts, guards, context, pages, and logical features.
- Repository includes a comprehensive README.md file.
