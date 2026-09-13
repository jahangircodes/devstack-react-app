import { useState } from 'react';

interface NavbarProps {
    stackCount?: number;
    onOpenMobileStack?: () => void;
}

export default function Navbar({ stackCount = 0, onOpenMobileStack }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">


                <div className="flex items-center gap-3">

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-slate-600 hover:text-slate-900 focus:outline-none p-1"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (

                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (

                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <span className="bg-linear-to-tr from-pink-600 to-purple-500 text-white font-bold p-1.5 sm:p-2 rounded-xl text-xs sm:text-sm">
                            DS
                        </span>
                        <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
                            Dev<span className="text-pink-600">Stack</span>
                        </span>
                    </div>
                </div>


                <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-slate-600 font-medium">
                    <a href="#" className="hover:text-slate-900 transition text-pink-600">Home</a>
                    <a href="#" className="hover:text-slate-900 transition">Technologies</a>
                    <a href="#" className="hover:text-slate-900 transition">Projects</a>
                    <a href="#" className="hover:text-slate-900 transition">About</a>
                    <a href="#" className="hover:text-slate-900 transition">Contact</a>
                </nav>


                <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm font-medium">
                    {onOpenMobileStack && (
                        <button
                            onClick={onOpenMobileStack}
                            className="lg:hidden relative p-2 text-slate-600 hover:text-slate-900"
                            aria-label="Open mobile stack"
                        >
                            <span className="text-xl">🎒</span>
                            {stackCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                    {stackCount}
                                </span>
                            )}
                        </button>
                    )}
                    <button className="text-slate-600 hover:text-slate-900 px-2 py-1">Sign In</button>
                    <button className="bg-pink-600 hover:bg-pink-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition shadow-sm">
                        Sign Up
                    </button>
                </div>
            </div>


            {isOpen && (
                <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-3 font-medium text-sm text-slate-600">
                    <a href="#" className="block py-1 hover:text-slate-900 text-pink-600">Home</a>
                    <a href="#" className="block py-1 hover:text-slate-900">Technologies</a>
                    <a href="#" className="block py-1 hover:text-slate-900">Projects</a>
                    <a href="#" className="block py-1 hover:text-slate-900">About</a>
                    <a href="#" className="block py-1 hover:text-slate-900">Contact</a>
                </div>
            )}
        </header>
    );
}