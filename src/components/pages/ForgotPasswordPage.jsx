import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ForgotPasswordPage = () => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);
    try {
      await resetPassword(email);
      setMessage("Password reset email sent! Check your inbox.");
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else {
        setError("Failed to send reset email. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex items-center justify-center py-20 pt-32 px-6 relative overflow-hidden min-h-[calc(100vh-80px)]">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-slate-50 to-orange-50 dark:from-slate-950 dark:via-slate-900 dark:to-amber-950 -z-20"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-200 dark:bg-amber-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-20 -z-10 pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white dark:bg-slate-800 rounded-[2rem] shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-100 dark:border-slate-700 p-10 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-amber-400 to-orange-500"></div>

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-amber-50 dark:bg-amber-900/40 rounded-2xl flex items-center justify-center text-3xl shadow-inner mx-auto mb-4">🔐</div>
            <h1 className="text-3xl font-black text-slate-900 dark:text-white">Reset Password</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">Enter your email and we&#39;ll send you a reset link.</p>
          </div>

          {message && (
            <div className="flex items-center gap-3 p-4 mb-6 text-sm text-emerald-800 dark:text-emerald-300 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              {message}
            </div>
          )}

          {error && (
            <div className="flex items-center gap-3 p-4 mb-6 text-sm text-rose-800 dark:text-rose-300 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
              <input
                id="reset-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
              />
            </div>

            <button
              id="reset-submit-btn"
              type="submit"
              disabled={loading}
              className="w-full text-white bg-amber-500 hover:bg-amber-600 font-bold rounded-xl py-3.5 transition-all disabled:opacity-60 shadow-lg shadow-amber-500/30"
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>

          <div className="mt-8 text-center border-t border-slate-100 dark:border-slate-700 pt-6">
            <Link to="/auth/login" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline font-bold">
              ← Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPasswordPage;
