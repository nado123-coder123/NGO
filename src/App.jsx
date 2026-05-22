import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import UnderProgressPage from "./components/pages/UnderProgressPage";
import PageNotFound from "./components/pages/PageNotFound";
import ItemsList from "./components/pages/items/ItemsList";
import CreateItem from "./components/pages/items/CreateItem";
import ViewItem from "./components/pages/items/ViewItem";
import EditItem from "./components/pages/items/EditItem";
import AdminDashboard from "./components/pages/dashboards/AdminDashboard";
import UserDashboard from "./components/pages/dashboards/UserDashboard";
import ChatPage from "./components/pages/dashboards/ChatPage";
import ProtectedRoute from "./components/guards/ProtectedRoute";
import AdminRoute from "./components/guards/AdminRoute";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/under-progress" element={<UnderProgressPage />} />

        <Route path="/items" element={<ItemsList />} />
        <Route path="/items/create" element={<ProtectedRoute><CreateItem /></ProtectedRoute>} />
        <Route path="/items/:id" element={<ViewItem />} />
        <Route path="/items/:id/edit" element={<ProtectedRoute><EditItem /></ProtectedRoute>} />

        <Route path="/dashboard/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
        <Route path="/dashboard/user" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
        <Route path="/dashboard/chat" element={<ProtectedRoute><ChatPage /></ProtectedRoute>} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
