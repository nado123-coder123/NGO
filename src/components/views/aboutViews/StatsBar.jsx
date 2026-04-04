const StatsBar = () => {
  const stats = [
    { value: "100", suffix: "%", label: "Donations to Students" },
    { value: "45",  suffix: "+", label: "Universities Reached" },
    { value: "10k", suffix: "+", label: "Volunteer Hours" },
    { value: "$2M", suffix: "+", label: "Scholarships Granted" },
  ];

  return (
    <section className="py-16 bg-indigo-600 text-white relative overflow-hidden">
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply opacity-50 blur-3xl"></div>
      <div className="max-w-screen-xl mx-auto px-6 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-y border-indigo-400 py-10">
        {stats.map((stat, i) => (
          <div key={i}>
            <h3 className="text-5xl font-black mb-2 flex items-center justify-center">{stat.value}<span className="text-indigo-300 text-3xl">{stat.suffix}</span></h3>
            <p className="text-indigo-100 text-sm tracking-wide uppercase font-bold">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
