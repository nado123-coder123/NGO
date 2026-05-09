# Application Deployment Report

**Live URL**: [https://shajar-e22e5.web.app/](https://shajar-e22e5.web.app/)
**GitHub Repository**: [https://github.com/nado123-coder123/NGO](https://github.com/nado123-coder123/NGO)

## Development Tasks Completed

### Task 1: Single Page Application (SPA) Routing
- Integrated `react-router-dom` to implement seamless SPA navigation without page reloads.
- Developed the following consistent routes managed through a global Navbar:
  - **Home**: `/`
  - **Create Item**: `/items/create`
  - **View All Items**: `/items`
  - **View Single Item**: `/items/:id` (Dynamic Route)
  - **Edit Item**: `/items/:id/edit`
  
### Task 2: Firestore CRUD Application & Dynamic Routing
Integrated Firebase Firestore to establish a robust Data Layer:
- **Create**: Forms explicitly designed in `/items/create` to structure Item data (Title, Category, Status, Description) and add them dynamically using `addDoc`.
- **Read (All Documents)**: Processively fetching documents iteratively inside `/items/` via `getDocs`, presenting them inside an elegant and comprehensive grid layout cards.
- **Read (Single Document)**: Utilized React Router dynamic routing parameter `/:id` effectively grabbing context inside `/items/:id` alongside the Firestore's `getDoc`.
- **Update**: `EditItem` mechanism securely retrieves the previous values with automatic pre-fills, permitting user alterations and effectively syncing to Firestore via `updateDoc`.
- **Delete**: Safely eradicates specific data from the Firestore backend leveraging unique IDs with `deleteDoc` and automatically updates the active view avoiding unwanted page reloads.

### Task 3: Deployment
- Prepared production bundle successfully via Vite.
- Ensured configuration of Hosting (`firebase.json` and `.firebaserc` files).
- The web app is reliably hosted and publicly served over an HTTPS domain configured directly through Firebase Hosting.

### Task 4: GitHub Repository Maintenance
- Source code is actively managed through Git CLI.
- All modifications covering logic, user interface and configurations are pushed safely to the `main` branch of the provided GitHub repository. 
- Maintained structured sub-directories ensuring the separation of layouts and logical features.
