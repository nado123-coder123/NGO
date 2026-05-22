const MissionSection = () => {
  return (
    <>
      <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <p className="text-sm font-bold text-slate-500 dark:text-slate-400 tracking-widest uppercase mb-8">Trusted by academic institutions worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <h3 className="text-2xl font-black text-slate-800 dark:text-slate-200">Stanford</h3>
            <h3 className="text-2xl font-black text-slate-800 dark:text-slate-200">Harvard</h3>
            <h3 className="text-2xl font-black text-slate-800 dark:text-slate-200">MIT</h3>
            <h3 className="text-xl font-black text-slate-800 dark:text-slate-200 tracking-widest">OXFORD</h3>
            <h3 className="text-2xl font-black text-slate-800 dark:text-slate-200 italic">Cambridge</h3>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-900 relative">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-sm mb-2">Our Mission</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white">Making Education Accessible for Everyone</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { emoji: "🎓", title: "Education Access",  desc: "Helping students access world-class education through accessible scholarships.", hoverBorder: "hover:border-indigo-100 dark:hover:border-indigo-800" },
              { emoji: "🤝", title: "Donor Network",     desc: "Directly connecting compassionate donors with extraordinary students.",         hoverBorder: "hover:border-rose-100 dark:hover:border-rose-800" },
              { emoji: "🔍", title: "Transparency",      desc: "Ensuring fair and secure distribution of all financial aid with full visibility.", hoverBorder: "hover:border-emerald-100 dark:hover:border-emerald-800" },
              { emoji: "🌍", title: "Global Growth",     desc: "Building a supportive global community that thrives on giving back.",            hoverBorder: "hover:border-amber-100 dark:hover:border-amber-800" },
            ].map((card, i) => (
              <div key={i} className={`bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 hover:shadow-2xl ${card.hoverBorder} transform hover:-translate-y-2 transition-all duration-300`}>
                <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/40 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner">{card.emoji}</div>
                <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3">{card.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionSection;
