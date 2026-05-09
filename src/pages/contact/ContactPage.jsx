import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <>
      <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-violet-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950 -z-10"></div>
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-100 dark:bg-indigo-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50"></div>

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <nav className="flex justify-center mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <Link
                  to="/"
                  className="inline-flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  <svg className="w-3 h-3 me-2.5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <span className="ms-1 text-sm font-medium text-slate-500 dark:text-slate-400 md:ms-2">Contact</span>
                </div>
              </li>
            </ol>
          </nav>

          <h2 className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-sm mb-3">Connect With Us</h2>
          <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-6">Get In Touch</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Have questions or want to join our cause? Reach out to our dedicated support team using the form below and we will get back to you as soon as possible.
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-slate-950 relative">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200 dark:bg-rose-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-40 -z-10 pointer-events-none"></div>

          <div className="bg-white dark:bg-slate-800 rounded-[2rem] shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-100 dark:border-slate-700 p-10 lg:p-14 relative overflow-hidden group hover:shadow-2xl hover:border-indigo-100 dark:hover:border-indigo-800 transition-all duration-300">
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-indigo-500 to-blue-500"></div>

            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-indigo-500 to-blue-500"></div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="cursor-pointer w-14 h-14 bg-indigo-50 dark:bg-indigo-900/40 rounded-2xl flex items-center justify-center text-2xl shadow-inner hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition">
                ✉️
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white">Send a Message</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">We typically reply within 24 hours.</p>
              </div>
            </div>

            <form action="https://formspree.io/f/xyknblbw" method="POST">
              <div className="flex items-center p-4 mb-4 text-sm text-indigo-800 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-800 rounded-lg bg-indigo-50 dark:bg-indigo-950/50" role="alert">
                <svg className="flex-shrink-0 inline w-4 h-4 me-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <div>
                  <span className="font-medium">Information:</span> Response times may vary depending on inquiry volume.
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    minLength={2}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Your Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  minLength={10}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-400 focus:outline-none resize-none transition"
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
