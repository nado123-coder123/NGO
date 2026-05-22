import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useAuth } from "../../../context/AuthContext";

const ItemsList = () => {
  const { currentUser, isAdmin } = useAuth();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "items"));
      const itemsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(itemsData);
    } catch (error) {
      console.error("Error fetching items: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const canModify = (item) => {
    return isAdmin || item.createdBy === currentUser?.uid;
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await deleteDoc(doc(db, "items", id));
        setItems(items.filter(item => item.id !== id));
      } catch (error) {
        console.error("Error deleting item: ", error);
      }
    }
  };

  if (loading) return <div className="py-24 text-center text-slate-800 dark:text-white min-h-screen">Loading Data...</div>;

  return (
    <div className="py-32 max-w-screen-xl mx-auto px-6 min-h-screen">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-extrabold text-slate-800 dark:text-white">All Items</h1>
        {currentUser && (
          <Link to="/items/create" className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition transform hover:-translate-y-0.5">Create New Item</Link>
        )}
      </div>

      {items.length === 0 ? (
        <div className="text-center py-10">
            <p className="text-slate-500 text-xl">No items available. Add some to get started!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(item => (
            <div key={item.id} className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition transform hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">{item.title}</h2>
              <p className="text-sm text-indigo-600 dark:text-indigo-400 font-bold mb-1 uppercase tracking-wider">{item.category} • {item.status}</p>
              {item.createdByEmail && (
                <p className="text-xs text-slate-400 dark:text-slate-500 mb-4">by {item.createdByEmail}</p>
              )}
              <p className="text-slate-600 dark:text-slate-300 mb-8 line-clamp-3 leading-relaxed">{item.description}</p>
              
              <div className="flex gap-3 border-t pt-6 border-slate-100 dark:border-slate-700">
                <Link to={`/items/${item.id}`} className="flex-1 text-center bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 py-2.5 rounded-xl text-sm font-bold hover:bg-emerald-100 dark:hover:bg-emerald-800/60 transition">View</Link>
                {canModify(item) && (
                  <>
                    <Link to={`/items/${item.id}/edit`} className="flex-1 text-center bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400 py-2.5 rounded-xl text-sm font-bold hover:bg-indigo-100 dark:hover:bg-indigo-800/60 transition">Edit</Link>
                    <button onClick={() => handleDelete(item.id)} className="flex-1 bg-rose-50 dark:bg-rose-900/40 text-rose-700 dark:text-rose-400 py-2.5 rounded-xl text-sm font-bold hover:bg-rose-100 dark:hover:bg-rose-800/60 transition">Delete</button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemsList;
