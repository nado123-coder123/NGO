import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const LoginPage = () => {
  const { signIn, signInWithGoogle, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signIn(form.email, form.password);
      navigate("/");
    } catch (err) {
      setError(getFirebaseError(err.code));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setError("");
    setGoogleLoading(true);
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (err) {
      setError(getFirebaseError(err.code));
    } finally {
      setGoogleLoading(false);
    }
  };

  const getFirebaseError = (code) => {
    switch (code) {
      case "auth/user-not-found": return "No account found with this email.";
      case "auth/wrong-password": return "Incorrect password. Try again.";
      case "auth/invalid-email": return "Please enter a valid email address.";
      case "auth/too-many-requests": return "Too many attempts. Please try again later.";
      case "auth/invalid-credential": return "Invalid credentials. Check your email and password.";
      default: return "Sign in failed. Please try again.";
    }
  };

  return (
    <section className="flex items-center justify-center py-20 pt-32 px-6 relative overflow-hidden min-h-[calc(100vh-80px)]">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-slate-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 -z-20"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-200 dark:bg-violet-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-30 -z-10 pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white dark:bg-slate-800 rounded-[2rem] shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-100 dark:border-slate-700 p-10 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>

          <div className="text-center mb-8">
            <div className="relative w-16 h-16 overflow-hidden bg-violet-100 dark:bg-violet-900/50 rounded-full mx-auto mb-4 ring-4 ring-violet-50 dark:ring-violet-900/30">
              <svg className="absolute w-16 h-16 text-violet-400 -left-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </div>
            <h1 className="text-3xl font-black text-slate-900 dark:text-white">Welcome Back</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">Sign in securely to your Shajar account.</p>
          </div>

          {error && (
            <div className="flex items-center gap-3 p-4 mb-6 text-sm text-rose-800 dark:text-rose-300 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
              {error}
            </div>
          )}

          <button
            id="google-signin-btn"
            onClick={handleGoogle}
            disabled={googleLoading}
            className="w-full flex items-center justify-center gap-3 border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 py-3 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-600 transition mb-6 disabled:opacity-60"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            {googleLoading ? "Signing in..." : "Continue with Google"}
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-slate-200 dark:bg-slate-600"></div>
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">or</span>
            <div className="flex-1 h-px bg-slate-200 dark:bg-slate-600"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
              <input
                id="login-email"
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-violet-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Password</label>
              <input
                id="login-password"
                type="password"
                name="password"
                required
                value={form.password}
                onChange={handleChange}
                placeholder="Your password"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-violet-400 focus:outline-none"
              />
            </div>

            <div className="flex justify-end">
              <Link to="/auth/forgot-password" className="text-sm text-violet-600 dark:text-violet-400 hover:underline font-medium">
                Forgot Password?
              </Link>
            </div>

            <button
              id="login-submit-btn"
              type="submit"
              disabled={loading}
              className="w-full text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:ring-violet-300 dark:focus:ring-violet-800 font-bold rounded-xl py-3.5 transition-all disabled:opacity-60 shadow-lg shadow-violet-600/30"
            >
              {loading ? "Signing in..." : "Sign In"}
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
