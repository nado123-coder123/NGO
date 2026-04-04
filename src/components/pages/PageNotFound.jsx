import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-200 dark:bg-rose-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-20 -z-10"></div>

      <div className="text-center max-w-lg">
        <div className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-500 mb-6">404</div>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Page Not Found</h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10">
          Oops! The page you&#39;re looking for doesn&#39;t exist or has been moved. Let&#39;s get you back on track.
        </p>
        <Link to="/" className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl hover:bg-indigo-700 shadow-[0_10px_30px_-10px_rgba(79,70,229,0.6)] hover:shadow-[0_10px_40px_-10px_rgba(79,70,229,0.8)] transform hover:-translate-y-1 transition-all font-bold text-lg">
          ← Back to Home
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
