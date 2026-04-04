import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <section className="flex-grow flex items-center justify-center py-20 pt-32 px-6 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-slate-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 -z-20"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-200 dark:bg-violet-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-30 -z-10 pointer-events-none"></div>

      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-slate-800 rounded-[2rem] shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-100 dark:border-slate-700 p-10 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>

          <div className="text-center mb-8">
            <div className="relative w-16 h-16 overflow-hidden bg-violet-100 dark:bg-violet-900/50 rounded-full mx-auto mb-4 ring-4 ring-violet-50 dark:ring-violet-900/30">
              <svg className="absolute w-18 h-18 text-violet-400 -left-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white">Welcome Back</h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">Sign in securely to your Shajar account.</p>
          </div>

          <div className="flex items-center p-4 mb-6 text-sm text-indigo-800 dark:text-indigo-300 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800" role="alert">
            <svg className="flex-shrink-0 inline w-4 h-4 me-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/></svg>
            <div><span className="font-medium">Secure Session:</span> Your connection is encrypted.</div>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Username or Email</label>
              <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-violet-400 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Password</label>
              <input type="password" required className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-violet-400 focus:outline-none" />
            </div>

            <div className="flex justify-between items-center text-sm font-medium">
              <div className="flex items-center">
                <input id="remember" type="checkbox" className="w-4 h-4 text-violet-600 bg-gray-100 dark:bg-slate-700 border-gray-300 dark:border-slate-600 rounded focus:ring-violet-500 focus:ring-2" />
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-slate-600 dark:text-slate-400">Remember me</label>
              </div>
              <a href="#" className="text-violet-600 dark:text-violet-400 hover:underline">Forgot Password?</a>
            </div>

            <button type="submit" className="text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:ring-violet-300 dark:focus:ring-violet-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none w-full transition-all">
              Secure Log In
            </button>
          </form>

          <div className="mt-8 text-center border-t border-slate-100 dark:border-slate-700 pt-6">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
              <Link to="/auth/register" className="text-indigo-600 dark:text-indigo-400 hover:underline ml-1 font-bold">Don&#39;t have an account? Sign up.</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
