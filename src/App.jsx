import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import UnderProgressPage from "./components/pages/UnderProgressPage";
import PageNotFound from "./components/pages/PageNotFound";
import ItemsList from "./components/pages/items/ItemsList";
import CreateItem from "./components/pages/items/CreateItem";
import ViewItem from "./components/pages/items/ViewItem";
import EditItem from "./components/pages/items/EditItem";

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
        <Route path="/under-progress" element={<UnderProgressPage />} />
        <Route path="/items" element={<ItemsList />} />
        <Route path="/items/create" element={<CreateItem />} />
        <Route path="/items/:id" element={<ViewItem />} />
        <Route path="/items/:id/edit" element={<EditItem />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
