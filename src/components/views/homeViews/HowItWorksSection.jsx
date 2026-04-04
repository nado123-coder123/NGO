const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-2">Process</h2>
          <h3 className="text-4xl font-extrabold mb-4">How It Works</h3>
          <p className="text-slate-400">A simple, transparent process to get aid where it&#39;s needed most.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-indigo-500/0 via-indigo-500/50 to-indigo-500/0 z-0"></div>

          {[
            { step: "1", title: "Apply",   desc: "Students submit their comprehensive scholarship applications via our secure portal.",   gradient: "from-indigo-400 to-purple-400",  shadow: "shadow-indigo-500/20" },
            { step: "2", title: "Review",  desc: "Our dedicated board carefully reviews and verifies all applications to select candidates.", gradient: "from-fuchsia-400 to-rose-400", shadow: "shadow-fuchsia-500/20" },
            { step: "3", title: "Support", desc: "Donors select students they wish to fund and monitor their educational progress.",        gradient: "from-emerald-400 to-teal-400", shadow: "shadow-emerald-500/20" },
          ].map((item, i) => (
            <div key={i} className={`text-center relative z-10 ${i > 0 ? "mt-8 md:mt-0" : ""}`}>
              <div className={`w-20 h-20 mx-auto bg-slate-800 border border-slate-700/50 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm mb-6 ${item.shadow}`}>
                <span className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br ${item.gradient}`}>{item.step}</span>
              </div>
              <h3 className="font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
