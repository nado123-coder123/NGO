const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 -z-10"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-300 dark:bg-indigo-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-rose-300 dark:bg-rose-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 items-center gap-12 px-6 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center space-x-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur border border-indigo-100 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-bold tracking-wide shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
            <span>Applications Open 2026</span>
          </span>

          <h1 className="text-5xl lg:text-7xl font-extrabold mt-6 leading-[1.15] text-slate-900 dark:text-white">
            Empowering Her <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-500">Bright Future</span>
          </h1>

          <p className="text-slate-600 dark:text-slate-400 mt-6 text-lg lg:text-xl leading-relaxed">
            A centralized platform connecting generous donors with ambitious students in need of educational financial support.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl hover:bg-indigo-700 shadow-[0_10px_30px_-10px_rgba(79,70,229,0.6)] hover:shadow-[0_10px_40px_-10px_rgba(79,70,229,0.8)] transform hover:-translate-y-1 transition-all font-bold text-lg">
              Apply for Aid
            </button>
            <button className="bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-8 py-4 rounded-xl hover:border-indigo-600 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transform hover:-translate-y-1 transition-all font-bold text-lg shadow-sm">
              Support Us
            </button>
          </div>
        </div>

        <div className="flex justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200 to-rose-200 dark:from-indigo-800 dark:to-rose-800 rounded-full blur-3xl opacity-50"></div>
          <img src="/img/logo.png" className="w-72 lg:w-96 drop-shadow-2xl relative z-10 transform hover:scale-105 transition duration-700" alt="Company Logo" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
