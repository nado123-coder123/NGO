const MissionVision = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 relative -mt-10 z-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
        <div className="bg-white dark:bg-slate-800 p-10 rounded-[2rem] shadow-xl shadow-slate-200 dark:shadow-slate-950 border border-slate-100 dark:border-slate-700 hover:shadow-2xl hover:border-indigo-100 dark:hover:border-indigo-800 transform hover:-translate-y-2 transition-all duration-300 text-center md:text-left relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-indigo-500 to-blue-500"></div>
          <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/40 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto md:mx-0">🌱</div>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Our Mission</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            To provide interest-free financial assistance and secure scholarships to
            deserving individuals so they can achieve stability, excellent education,
            and long-term professional success.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-10 rounded-[2rem] shadow-xl shadow-slate-200 dark:shadow-slate-950 border border-slate-100 dark:border-slate-700 hover:shadow-2xl hover:border-violet-100 dark:hover:border-violet-800 transform hover:-translate-y-2 transition-all duration-300 text-center md:text-left relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
          <div className="w-16 h-16 bg-violet-50 dark:bg-violet-900/40 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto md:mx-0">🌍</div>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Our Vision</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            A connected world where financial hardship never prevents talented and driven
            individuals from achieving their wildest dreams and contributing
            positively to our global society.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
