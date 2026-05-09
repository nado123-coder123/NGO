import React, { useState, useEffect, useRef } from 'react';

const StatItem = ({ end, duration, label, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={countRef} className="glass p-8 rounded-[2rem] text-center transform hover:scale-105 transition-all duration-500 hover:shadow-2xl group border border-white/5 dark:border-white/10">
      <div className="text-4xl md:text-5xl font-black gradient-text mb-3">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-slate-500 dark:text-slate-400 font-bold tracking-widest uppercase text-xs">
        {label}
      </div>
    </div>
  );
};

const StatsCounter = () => {
  const stats = [
    { end: 12500, duration: 2500, label: "Students Helped", prefix: "", suffix: "+" },
    { end: 45, duration: 2000, label: "Scholarships Funded", prefix: "$", suffix: "M+" },
    { end: 28, duration: 1800, label: "Partner Universities", prefix: "", suffix: "" },
    { end: 99, duration: 2200, label: "Success Rate", prefix: "", suffix: "%" },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] animate-blob"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-rose-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
      
      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
