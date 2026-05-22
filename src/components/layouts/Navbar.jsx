import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, isAdmin, isAuthenticated, logOut } = useAuth();
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    isActive(path)
      ? "text-indigo-600 dark:text-indigo-400 transition"
      : "hover:text-indigo-600 dark:hover:text-indigo-400 transition";

  const handleLogOut = async () => {
    await logOut();
    navigate("/");
  };

  const dashboardPath = isAdmin ? "/dashboard/admin" : "/dashboard/user";

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-700/60 top-0 transition-all">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center space-x-3">
          <div className="bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-xl">
            <img src="/img/logo.png" className="w-10 h-10 object-contain drop-shadow" alt="Company Logo" />
          </div>
          <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-violet-600">Shajar</span>
        </Link>

        <ul className="hidden md:flex space-x-8 font-semibold text-sm tracking-wide text-slate-600 dark:text-slate-300">
          <li><Link to="/" className={linkClass("/")}>Home</Link></li>
          <li><Link to="/about" className={linkClass("/about")}>About</Link></li>
          <li><Link to="/items" className={linkClass("/items")}>Items</Link></li>
          <li><Link to="/contact" className={linkClass("/contact")}>Contact</Link></li>
          {isAuthenticated && (
            <li><Link to={dashboardPath} className={linkClass(dashboardPath)}>Dashboard</Link></li>
          )}
        </ul>

        <div className="flex items-center space-x-3 text-sm font-semibold tracking-wide">
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
            {dark ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
            )}
          </button>

          {isAuthenticated ? (
            <>
              <div className="hidden md:flex items-center gap-2 text-slate-600 dark:text-slate-300 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold">
                  {(currentUser?.displayName || currentUser?.email || "?")[0].toUpperCase()}
                </div>
                <span className="text-xs font-bold truncate max-w-[100px]">{currentUser?.displayName || currentUser?.email}</span>
                {isAdmin && <span className="text-[10px] font-bold bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 px-1.5 py-0.5 rounded-full">Admin</span>}
              </div>
              <button onClick={handleLogOut} className="hidden md:block text-slate-600 dark:text-slate-300 px-5 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition">Sign Out</button>
            </>
          ) : (
            <>
              <Link to="/auth/login" className="hidden md:block text-slate-600 dark:text-slate-300 px-5 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition">Sign In</Link>
              <Link to="/auth/register" className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl hover:bg-indigo-700 shadow-[0_8px_20px_-6px_rgba(79,70,229,0.5)] hover:shadow-[0_10px_25px_-6px_rgba(79,70,229,0.6)] transform hover:-translate-y-0.5 transition-all">Sign Up</Link>
            </>
          )}

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-slate-600 dark:text-slate-300 p-2" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 px-6 py-4 space-y-3">
          <Link to="/" onClick={() => setMobileOpen(false)} className="block py-2 font-semibold text-slate-700 dark:text-slate-300">Home</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)} className="block py-2 font-semibold text-slate-700 dark:text-slate-300">About</Link>
          <Link to="/items" onClick={() => setMobileOpen(false)} className="block py-2 font-semibold text-slate-700 dark:text-slate-300">Items</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="block py-2 font-semibold text-slate-700 dark:text-slate-300">Contact</Link>
          {isAuthenticated && (
            <>
              <Link to={dashboardPath} onClick={() => setMobileOpen(false)} className="block py-2 font-semibold text-slate-700 dark:text-slate-300">Dashboard</Link>
              <Link to="/dashboard/chat" onClick={() => setMobileOpen(false)} className="block py-2 font-semibold text-slate-700 dark:text-slate-300">Chat</Link>
              <button onClick={() => { handleLogOut(); setMobileOpen(false); }} className="block py-2 font-semibold text-rose-600 dark:text-rose-400">Sign Out</button>
            </>
          )}
          {!isAuthenticated && (
            <>
              <Link to="/auth/login" onClick={() => setMobileOpen(false)} className="block py-2 font-semibold text-slate-700 dark:text-slate-300">Sign In</Link>
              <Link to="/auth/register" onClick={() => setMobileOpen(false)} className="block py-2 font-semibold text-indigo-600 dark:text-indigo-400">Sign Up</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
