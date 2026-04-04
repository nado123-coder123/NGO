const ContactForm = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 relative">
      <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200 dark:bg-rose-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-40 -z-10 pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="bg-white dark:bg-slate-800 rounded-[2rem] shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-100 dark:border-slate-700 p-10 lg:p-14 relative overflow-hidden group hover:shadow-2xl hover:border-indigo-100 dark:hover:border-indigo-800 transition-all duration-300">
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-indigo-500 to-blue-500"></div>

          <div className="flex items-center space-x-4 mb-8">
            <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/40 rounded-2xl flex items-center justify-center text-2xl shadow-inner hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition">✉️</div>
            <div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white">Send a Message</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">We typically reply within 24 hours.</p>
            </div>
          </div>

          <form action="https://formspree.io/f/xyknblbw" method="POST">
            <div className="flex items-center p-4 mb-4 text-sm text-indigo-800 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-800 rounded-lg bg-indigo-50 dark:bg-indigo-950/50" role="alert">
              <svg className="flex-shrink-0 inline w-4 h-4 me-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/></svg>
              <div><span className="font-medium">Information:</span> Response times may vary depending on inquiry volume.</div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                <input type="text" name="name" required minLength="2" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-400 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-400 focus:outline-none" />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Subject</label>
              <input type="text" name="subject" required className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-400 focus:outline-none" />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Your Message</label>
              <textarea name="message" rows="4" required minLength="10" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-400 focus:outline-none resize-none"></textarea>
            </div>

            <button type="submit" className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none w-full transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
