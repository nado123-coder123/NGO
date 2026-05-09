import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";

const EditItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    title: "",
    category: "Event",
    status: "Active",
    description: "",
  });

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, "items", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setForm({
            title: data.title || "",
            category: data.category || "Event",
            status: data.status || "Active",
            description: data.description || ""
          });
        } else {
          console.error("Item not found");
          navigate("/items");
        }
      } catch (error) {
        console.error("Error fetching item: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, [id, navigate]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const docRef = doc(db, "items", id);
      await updateDoc(docRef, { ...form });
      navigate(`/items/${id}`);
    } catch (error) {
      console.error("Error updating item: ", error);
      alert("Failed to update item");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="py-32 text-center text-slate-800 dark:text-white min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div></div>;

  return (
    <div className="py-32 max-w-2xl mx-auto px-6 min-h-screen">
      <Link to={`/items/${id}`} className="text-indigo-600 dark:text-indigo-400 font-bold mb-6 inline-block hover:underline">&larr; Back to Item</Link>
      <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-[2rem] shadow-2xl border border-slate-200 dark:border-slate-700">
        <h1 className="text-3xl font-extrabold text-slate-800 dark:text-white mb-8">Edit Item</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Title</label>
            <input type="text" name="title" required value={form.title} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition" />
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
            <textarea name="description" required rows="5" value={form.description} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"></textarea>
          </div>

          <button type="submit" disabled={saving} className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-600/30 hover:bg-indigo-700 transition disabled:opacity-70 transform hover:-translate-y-0.5">
            {saving ? "Saving Changes..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditItem;
