import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";

const ViewItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, "items", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching item: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await deleteDoc(doc(db, "items", id));
        navigate("/items");
      } catch (error) {
        console.error("Error deleting item: ", error);
      }
    }
  };

  if (loading) return <div className="py-24 text-center text-slate-800 dark:text-white min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div></div>;
  if (!item) return <div className="py-24 text-center text-rose-500 font-bold min-h-screen">Item not found.</div>;

  return (
    <div className="py-32 max-w-3xl mx-auto px-6 min-h-screen">
      <Link to="/items" className="text-indigo-600 dark:text-indigo-400 font-bold mb-6 inline-block hover:underline">&larr; Back to Items</Link>
      <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-[2rem] shadow-2xl border border-slate-200 dark:border-slate-700">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">{item.title}</h1>
          <span className="self-start px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
            {item.category}
          </span>
        </div>
        
        <div className="flex items-center gap-2 mb-8">
          <span className="text-slate-500 dark:text-slate-400 font-semibold">Status:</span>
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.status === 'Active' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300'}`}>
            {item.status}
          </span>
        </div>
        
        <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 mb-12">
          <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">Description</h3>
          <p className="leading-relaxed whitespace-pre-wrap">{item.description}</p>
        </div>

        <div className="flex gap-4 pt-8 border-t border-slate-200 dark:border-slate-700">
          <Link to={`/items/${item.id}/edit`} className="flex-1 text-center bg-indigo-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-indigo-600/30 hover:bg-indigo-700 transition transform hover:-translate-y-0.5">
            Edit Item
          </Link>
          <button onClick={handleDelete} className="flex-1 bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 py-3 rounded-xl font-bold border border-rose-200 dark:border-rose-900/50 hover:bg-rose-100 dark:hover:bg-rose-900/40 transition">
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewItem;
