import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-white/10">
      <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Shajar</h3>
          <p className="text-sm leading-relaxed mb-6">Empowering education through extreme generosity and total transparency. We build the future by supporting students today.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
          <div className="flex flex-col space-y-3 text-sm">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <Link to="/about" className="hover:text-white transition">About Us</Link>
            <Link to="/contact" className="hover:text-white transition">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Legal</h4>
          <div className="flex flex-col space-y-3 text-sm">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-center text-sm">
        <p>© 2026 Shajar Hope Alliance. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
