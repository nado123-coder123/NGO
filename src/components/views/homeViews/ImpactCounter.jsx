import React, { useState } from 'react';

const ImpactCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => Math.max(0, prev - 1));
  const reset = () => setCount(0);

  const getImpactMessage = () => {
    if (count === 0) return "Start planting seeds of change today.";
    if (count < 10) return "Every seed counts toward a brighter future!";
    if (count < 25) return "You're building a foundation for a student!";
    if (count < 50) return "Your impact is growing into a forest of hope!";
    return "Legendary status! You're changing lives globally.";
  };

  const milestones = [
    { threshold: 10, label: "Total Books Provided", icon: "📚" },
    { threshold: 25, label: "Uniforms Funded", icon: "👔" },
    { threshold: 50, label: "Scholarships Unlocked", icon: "🎓" },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
      
      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-sm mb-2">Interactive</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Impact Simulator</h3>
          <p className="text-slate-600 dark:text-slate-400">Calculate how your consistent support translates into real-world change.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass p-12 rounded-[3rem] shadow-2xl shadow-indigo-200/50 dark:shadow-indigo-950/50 border border-white/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 select-none">
              <span className="text-9xl">🌿</span>
            </div>

            <div className="flex flex-col items-center gap-10">
              <div className="text-center">
                <span className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-xs mb-4 block">Current Seeds Planted</span>
                <div className="text-8xl md:text-9xl font-black gradient-text tracking-tighter tabular-nums drop-shadow-sm">
                  {count}
                </div>
                <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mt-4 italic">
                  &quot;{getImpactMessage()}&quot;
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                <button 
                  onClick={decrement}
                  className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-rose-500 hover:text-rose-500 dark:hover:border-rose-500 transition-all duration-300 flex items-center justify-center text-3xl font-bold shadow-sm"
                  aria-label="Decrease Impact"
                >
                  −
                </button>
                
                <button 
                  onClick={reset}
                  className="px-10 py-4 rounded-2xl bg-slate-900 dark:bg-slate-700 text-white font-bold hover:bg-slate-800 dark:hover:bg-slate-600 transition-all duration-300 shadow-lg shadow-slate-900/20 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                  Reset
                </button>

                <button 
                  onClick={increment}
                  className="w-16 h-16 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center text-3xl font-bold shadow-xl shadow-indigo-600/30"
                  aria-label="Increase Impact"
                >
                  +
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8 border-t border-slate-200/50 dark:border-slate-700/50 pt-10">
                {milestones.map((milestone, idx) => {
                  const achieved = count >= milestone.threshold;
                  return (
                    <div key={idx} className={`p-6 rounded-2xl transition-all duration-500 flex items-center gap-4 ${achieved ? 'bg-indigo-50 dark:bg-indigo-900/40 border border-indigo-100 dark:border-indigo-800 opacity-100' : 'bg-slate-100/50 dark:bg-slate-800/50 opacity-40 grayscale'}`}>
                      <div className="text-3xl">{milestone.icon}</div>
                      <div>
                        <div className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-tighter">
                          {Math.floor(count / (milestone.threshold / (idx + 1)))} Units
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 font-bold">{milestone.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactCounter;
