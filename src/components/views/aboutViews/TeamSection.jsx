const TeamSection = () => {
  const team = [
    { name: "Ayesha Masood",   role: "Founder",         fallback: "Ayesha+Masood" },
    { name: "Nadir Latif Butt", role: "Program Manager", fallback: "Nadir+Latif+Butt" },
    { name: "Mahin Kashif",    role: "Finance Coord.",   fallback: "Mahin+Kashif" },
    { name: "Iqra Tanveer",    role: "Comm. Outreach",  fallback: "Iqra+Tanveer" },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="text-center max-w-2xl mx-auto mb-16 px-6">
        <h2 className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-sm mb-2">Leadership</h2>
        <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white">Meet Our Team</h3>
      </div>

      <div className="max-w-screen-xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {team.map((member, i) => (
          <div key={i} className="group text-center">
            <div className="relative w-40 h-40 mx-auto mb-6 rounded-full p-1 bg-gradient-to-tr from-indigo-500 to-rose-500 group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
              <img
                src={`https://ui-avatars.com/api/?name=${member.fallback}&background=e0e7ff&color=4f46e5&size=200`}
                className="w-full h-full rounded-full object-cover border-4 border-white dark:border-slate-800"
                alt={member.name}
              />
            </div>
            <h4 className="font-black text-xl text-slate-900 dark:text-white">{member.name}</h4>
            <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm mt-1 uppercase tracking-wide">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
