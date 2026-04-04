import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const [dark, setDark] = useState(false);

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
          <li><Link to="/contact" className={linkClass("/contact")}>Contact</Link></li>
        </ul>

        <div className="flex items-center space-x-3 text-sm font-semibold tracking-wide">
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
            {dark ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
            )}
          </button>
          <Link to="/auth/login" className="hidden md:block text-slate-600 dark:text-slate-300 px-5 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition">Sign In</Link>
          <Link to="/auth/register" className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl hover:bg-indigo-700 shadow-[0_8px_20px_-6px_rgba(79,70,229,0.5)] hover:shadow-[0_10px_25px_-6px_rgba(79,70,229,0.6)] transform hover:-translate-y-0.5 transition-all">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
