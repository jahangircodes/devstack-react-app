
import footer from '../assets/logo-text.png';


export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 mt-12 sm:mt-20 pt-10 pb-8 text-xs text-slate-400 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10">
                    <div className="md:col-span-5 space-y-4">

                        <img src={footer} alt="Footer Logo" />

                        <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        <div className="pt-2 flex items-center gap-4 font-medium text-slate-600">
                            <a href="#" className="hover:text-slate-900 transition">GitHub</a>
                            <a href="#" className="hover:text-slate-900 transition">Twitter</a>
                            <a href="#" className="hover:text-slate-900 transition">LinkedIn</a>
                        </div>
                    </div>

                    <div className="md:col-span-7 grid grid-cols-3 gap-4">
                        <div>
                            <h4 className="font-bold text-slate-900 mb-4 text-xs tracking-wider">PRODUCT</h4>
                            <ul className="space-y-3 text-slate-400">
                                <li><a href="#" className="hover:text-slate-700 transition">Home</a></li>
                                <li><a href="#" className="hover:text-slate-700 transition">Technologies</a></li>
                                <li><a href="#" className="hover:text-slate-700 transition">Projects</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-4 text-xs tracking-wider">COMPANY</h4>
                            <ul className="space-y-3 text-slate-400">
                                <li><a href="#" className="hover:text-slate-700 transition">About</a></li>
                                <li><a href="#" className="hover:text-slate-700 transition">Contact</a></li>
                                <li><a href="#" className="hover:text-slate-700 transition">Careers</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-4 text-xs tracking-wider">LEGAL</h4>
                            <ul className="space-y-3 text-slate-400">
                                <li><a href="#" className="hover:text-slate-700 transition">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-slate-700 transition">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between text-slate-400 text-xs gap-4">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-slate-600 transition">Privacy</a>
                        <a href="#" className="hover:text-slate-600 transition">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}