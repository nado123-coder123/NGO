const AboutHero = () => {
  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-slate-900 text-white text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-900 -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>

      <div className="relative z-10 px-6 max-w-3xl mx-auto">
        <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4">Who We Are</h2>
        <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Shajar</span>
        </h1>
        <p className="text-lg lg:text-xl mt-6 text-slate-300 leading-relaxed">
          Shajar Hope Alliance is a modern non-profit initiative focused on empowering extraordinary
          individuals through education and financial support. We help people grow, just like a tree, by providing opportunities that build stronger futures.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
