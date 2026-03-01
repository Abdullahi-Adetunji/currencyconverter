import { useState, useEffect } from 'react';

export default function Landing({ onStart }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0B0F19] dark:text-white font-sans selection:bg-violet-500/30 transition-colors duration-300">
      
      {/* Navbar Container */}
      <div className="relative z-50">
        <nav className="flex items-center justify-between px-6 py-4 md:px-8 md:py-6 max-w-7xl mx-auto">
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center shadow-md">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Currenzy</span>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">Features</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">Rates</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">About</a>
            
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors ml-2" aria-label="Toggle Dark Mode">
              {isDarkMode ? (
                <svg className="w-5 h-5 text-amber-400 hover:text-amber-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              ) : (
                <svg className="w-5 h-5 text-slate-600 hover:text-violet-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
              )}
            </button>
            <div className="h-6 w-px bg-slate-300 dark:bg-slate-700 mx-1"></div>
            <button className="text-slate-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 font-semibold transition">Sign In</button>
          </div>

          {/* NEW: Mobile Nav Controls (Theme Toggle + Hamburger) */}
          <div className="flex items-center gap-2 md:hidden">
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
              {isDarkMode ? (
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              ) : (
                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
              )}
            </button>
            
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors">
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              )}
            </button>
          </div>
        </nav>

        {/* NEW: Mobile Dropdown Menu for Landing Page */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 bg-white dark:bg-[#151B2B] rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-4 flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
            <a href="#" className="px-4 py-3 text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors">Features</a>
            <a href="#" className="px-4 py-3 text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors">Rates</a>
            <a href="#" className="px-4 py-3 text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors">About</a>
            <div className="h-px w-full bg-slate-100 dark:bg-slate-800 my-2"></div>
            <button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-xl transition-colors">Sign In</button>
          </div>
        )}
      </div>

      <main className="flex flex-col items-center justify-center pt-10 pb-20 px-6 max-w-4xl mx-auto text-center">
        {/* Same Hero content as before... */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300 mb-8 transition-colors duration-300">
          <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
          Real-time exchange rates
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-slate-900 dark:text-white">
          Convert Currency <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-violet-400 dark:from-violet-400 dark:to-violet-600">Instantly</span>
        </h1>
        
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed">
          Fast, accurate, and secure currency conversion at your fingertips. Get real-time exchange rates for over 150 currencies worldwide.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
          <button onClick={onStart} className="w-full sm:w-auto bg-violet-600 hover:bg-violet-700 dark:hover:bg-violet-500 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-violet-600/20 flex items-center justify-center gap-2">
            Start Converting
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
          <button className="w-full sm:w-auto bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-sm dark:shadow-none">
            View Rates
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          {[
            { title: "Live Rates", desc: "Real-time exchange rates updated every second", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
            { title: "Secure", desc: "Bank-level security for all your transactions", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
            { title: "Lightning Fast", desc: "Instant calculations with zero delays", icon: "M13 10V3L4 14h7v7l9-11h-7z" }
          ].map((feature, i) => (
            <div key={i} className="bg-white dark:bg-[#131825] border border-slate-200 dark:border-slate-800 p-6 rounded-2xl hover:border-violet-300 dark:hover:border-slate-700 transition shadow-sm dark:shadow-none duration-300">
              <div className="w-10 h-10 bg-violet-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-4 transition-colors">
                <svg className="w-5 h-5 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon}></path></svg>
              </div>
              <h3 className="text-slate-900 dark:text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}