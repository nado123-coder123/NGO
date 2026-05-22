const CoreValues = () => {
  const values = [
    { emoji: "💚", title: "Compassion",    desc: "We deeply care about helping individuals overcome financial struggles and succeed.",     bg: "bg-rose-100 dark:bg-rose-900/40" },
    { emoji: "🔍", title: "Transparency",  desc: "Ensuring 100% fair and accountable distribution of all funds and scholarships.",         bg: "bg-indigo-100 dark:bg-indigo-900/40" },
    { emoji: "🤝", title: "Collaboration", desc: "Working harmoniously with donors, volunteers, and communities globally.",               bg: "bg-amber-100 dark:bg-amber-900/40" },
    { emoji: "🌿", title: "Empowerment",   desc: "Giving brilliant individuals the complete support they need to succeed independently.", bg: "bg-emerald-100 dark:bg-emerald-900/40" },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
      <div className="text-center max-w-2xl mx-auto mb-16 px-6">
        <h2 className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-sm mb-2">Principles</h2>
        <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white">Our Core Values</h3>
      </div>

      <div className="max-w-screen-xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {values.map((val, i) => (
          <div key={i} className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl text-center border border-slate-100 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-700 hover:shadow-xl hover:shadow-indigo-100/50 dark:hover:shadow-slate-950/50 hover:border-indigo-100 dark:hover:border-indigo-800 transition-all duration-300 transform hover:-translate-y-1">
            <div className={`w-14 h-14 ${val.bg} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-5`}>{val.emoji}</div>
            <h4 className="font-bold text-xl text-slate-900 dark:text-white mb-3">{val.title}</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{val.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
