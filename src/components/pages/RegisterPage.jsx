import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <section className="flex-grow flex items-center justify-center py-20 pt-32 px-6 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-slate-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 -z-20"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-200 dark:bg-indigo-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-30 -z-10 pointer-events-none"></div>

      <div className="w-full max-w-lg">
        <div className="bg-white dark:bg-slate-800 rounded-[2rem] shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-100 dark:border-slate-700 p-10 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-indigo-500 to-blue-500"></div>

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/40 rounded-2xl flex items-center justify-center text-3xl shadow-inner mx-auto mb-4">🚀</div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white">Create an Account</h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">Join the Shajar community and start making an impact.</p>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-950/50 border-l-4 border-indigo-400 dark:border-indigo-600 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-indigo-700 dark:text-indigo-300">Please enter accurate information to expedite your application process.</p>
              </div>
            </div>
          </div>

          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block mb-2 text-sm font-bold text-slate-700 dark:text-slate-300">First Name</label>
                <input type="text" placeholder="John" className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block mb-2 text-sm font-bold text-slate-700 dark:text-slate-300">Last Name</label>
                <input type="text" placeholder="Doe" className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div>
              <label className="block mb-2 text-sm font-bold text-slate-700 dark:text-slate-300">Password</label>
              <input type="password" placeholder="Create a strong password" className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div>
              <label className="block mb-2 text-sm font-bold text-slate-700 dark:text-slate-300">Account Type</label>
              <select className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none">
                <option value="donor">I want to be a Donor</option>
                <option value="student">I am a Student Applicant</option>
                <option value="volunteer">I want to Volunteer</option>
              </select>
            </div>

            <button type="button" className="w-full inline-flex justify-center items-center bg-indigo-600 text-white px-6 py-4 rounded-xl hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 transition-all font-bold shadow-lg shadow-indigo-600/30 transform hover:-translate-y-0.5 mt-4">
              Create Account
            </button>
          </form>

          <div className="mt-8 text-center border-t border-slate-100 dark:border-slate-700 pt-6">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
              <Link to="/auth/login" className="text-indigo-600 dark:text-indigo-400 hover:underline ml-1 font-bold">Already have an account? Sign in.</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
