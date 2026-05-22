# NGO Smart Aid

A full-stack Single Page Application (SPA) built with **React**, **React Router DOM**, and **Firebase Firestore** for managing NGO aid items and resources.

## 🌐 Live Demo

[https://ngo-smart-aid.vercel.app/](https://ngo-smart-aid.vercel.app/)

## 📁 Repository

[https://github.com/70147071-blip/NGO-Smart-aid](https://github.com/70147071-blip/NGO-Smart-aid)

---

## 🚀 Features

- **SPA Routing** — Seamless navigation using React Router DOM (no page reloads)
- **Full CRUD** — Create, Read, Update, and Delete items stored in Firebase Firestore
- **Dynamic Routing** — Individual item views via `/items/:id`
- **Responsive UI** — Clean, modern layout with consistent Navbar across all routes
- **Live Deployment** — Hosted on Vercel with HTTPS

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18, JSX |
| Routing | React Router DOM v6 |
| Database | Firebase Firestore |
| Build Tool | Vite |
| Hosting | Vercel |
| Version Control | Git & GitHub |

---

## 📂 Project Structure

```
src/
├── components/
│   ├── layouts/       # Navbar, Footer
│   └── pages/
│       ├── items/     # CreateItem, ItemsList, ViewItem, EditItem
│       ├── HomePage.jsx
│       ├── AboutPage.jsx
│       ├── ContactPage.jsx
│       ├── LoginPage.jsx
│       └── RegisterPage.jsx
├── firebase/
│   └── config.js      # Firebase configuration
├── App.jsx            # Route definitions
└── main.jsx           # App entry point
```

---

## 🔧 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/70147071-blip/NGO-Smart-aid.git
cd NGO-Smart-aid

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## 📋 Routes

| Route | Description |
|-------|-------------|
| `/` | Home Page |
| `/items` | View All Items |
| `/items/create` | Create New Item |
| `/items/:id` | View Single Item (Dynamic Route) |
| `/items/:id/edit` | Edit Existing Item |
| `/about` | About Page |
| `/contact` | Contact Page |

---

## 🗄️ Database

Firebase Firestore is used as the backend database. CRUD operations are handled via the Firebase SDK:
- `addDoc` — Create
- `getDocs` / `getDoc` — Read
- `updateDoc` — Update
- `deleteDoc` — Delete
