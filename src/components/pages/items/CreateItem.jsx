import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useAuth } from "../../../context/AuthContext";

const CreateItem = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    category: "Event",
    status: "Active",
    description: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "items"), {
        ...form,
        createdBy: currentUser.uid,
        createdByEmail: currentUser.email,
        createdAt: new Date()
      });
      navigate("/items");
    } catch (error) {
      console.error("Error creating item: ", error);
      alert("Failed to create item");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-32 max-w-2xl mx-auto px-6 min-h-screen">
      <Link to="/items" className="text-indigo-600 dark:text-indigo-400 font-bold mb-6 inline-block hover:underline">&larr; Back to Items</Link>
      <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-[2rem] shadow-2xl border border-slate-200 dark:border-slate-700">
        <h1 className="text-3xl font-extrabold text-slate-800 dark:text-white mb-8">Create New Item</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Title</label>
            <input type="text" name="title" required value={form.title} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition" placeholder="Enter item title" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Category</label>
              <select name="category" value={form.category} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition">
                <option value="Event">Event</option>
                <option value="Campaign">Campaign</option>
                <option value="Resource">Resource</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Status</label>
              <select name="status" value={form.status} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition">
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Description</label>
            <textarea name="description" required rows="5" value={form.description} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition" placeholder="Provide detailed description..."></textarea>
          </div>

          <button type="submit" disabled={loading} className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-indigo-700 transition disabled:opacity-70 transform hover:-translate-y-0.5">
            {loading ? "Creating..." : "Create Item"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateItem;
