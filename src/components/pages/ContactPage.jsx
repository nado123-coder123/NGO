import ContactForm from "../views/contactViews/ContactForm";

const ContactPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-violet-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950 -z-10"></div>
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-100 dark:bg-indigo-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-sm mb-3">Connect With Us</h2>
          <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-6">Get In Touch</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Have questions or want to join our cause? Reach out to our dedicated support team using the form below and we will get back to you as soon as possible.
          </p>
        </div>
      </section>

      <ContactForm />
    </>
  );
};

export default ContactPage;
