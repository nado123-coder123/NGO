import HeroSection from "../views/homeViews/HeroSection";
import MissionSection from "../views/homeViews/MissionSection";
import HowItWorksSection from "../views/homeViews/HowItWorksSection";
import StudentCRUDSection from "../views/homeViews/StudentCRUDSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <HowItWorksSection />

      {/* Portal Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-sm mb-2">Access</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white">Choose Your Portal</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="group bg-white dark:bg-slate-800 rounded-[2rem] p-10 shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 hover:shadow-2xl border border-slate-100 dark:border-slate-700 hover:border-indigo-100 dark:hover:border-indigo-800 transform hover:-translate-y-2 transition-all duration-500 text-center relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-indigo-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <div className="bg-indigo-50 dark:bg-indigo-900/40 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 shadow-inner"><span className="text-5xl">🎓</span></div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">Student Portal</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">Apply for scholarships, upload vital documents, and seamlessly track your application status.</p>
              <button className="bg-indigo-600 text-white w-full py-4 rounded-xl hover:bg-indigo-700 transition font-bold shadow-lg shadow-indigo-600/30">Log in as Student</button>
            </div>
            <div className="group bg-white dark:bg-slate-800 rounded-[2rem] p-10 shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 hover:shadow-2xl border border-slate-100 dark:border-slate-700 hover:border-rose-100 dark:hover:border-rose-800 transform hover:-translate-y-2 transition-all duration-500 text-center relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-rose-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <div className="bg-rose-50 dark:bg-rose-900/40 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 shadow-inner"><span className="text-5xl">💚</span></div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">Donor Portal</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">Browse student profiles, securely fund their education, and make an impact today.</p>
              <button className="bg-rose-600 text-white w-full py-4 rounded-xl hover:bg-rose-700 transition font-bold shadow-lg shadow-rose-600/30">Make a Donation</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-2">Success Stories</h2>
            <h3 className="text-4xl font-extrabold">Hear from our students</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 relative">
              <div className="text-4xl text-indigo-500 absolute top-6 left-6 opacity-30 font-serif">&quot;</div>
              <p className="text-slate-300 relative z-10 italic leading-relaxed mb-6">&quot;Shajar radically changed my life. Thanks to my incredibly generous donor, I was able to finish my final year of engineering without the burden of severe debt.&quot;</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-lg border-2 border-slate-700">A</div>
                <div><h4 className="font-bold text-white">Amira K.</h4><p className="text-sm text-indigo-400">Computer Engineering</p></div>
              </div>
            </div>
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 relative">
              <div className="text-4xl text-rose-500 absolute top-6 left-6 opacity-30 font-serif">&quot;</div>
              <p className="text-slate-300 relative z-10 italic leading-relaxed mb-6">&quot;The application process was completely transparent and lightning fast. I felt supported by the global community the entire way through.&quot;</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-rose-500 to-orange-500 flex items-center justify-center font-bold text-lg border-2 border-slate-700">O</div>
                <div><h4 className="font-bold text-white">Omar H.</h4><p className="text-sm text-rose-400">Medical Student</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-indigo-600 text-white text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-extrabold mb-4">Stay updated with our mission</h3>
          <p className="text-indigo-200 mb-8">Sign up for our monthly newsletter to see the incredible impact your donations are making across the globe.</p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center">
            <input type="email" placeholder="Enter your email address" required className="px-6 py-4 rounded-xl text-slate-900 w-full sm:w-96 focus:outline-none focus:ring-4 focus:ring-indigo-400" />
            <button type="submit" className="bg-slate-900 text-white px-8 py-4 rounded-xl hover:bg-slate-800 transition font-bold whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>

      <StudentCRUDSection />
    </>
  );
};

export default HomePage;
