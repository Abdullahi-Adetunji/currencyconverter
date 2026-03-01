import { useState, useEffect } from "react";

export default function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [rateAlerts, setRateAlerts] = useState(false);
  const [defaultCurrency, setDefaultCurrency] = useState("USD");

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="flex justify-center py-12 px-4 transition-colors duration-300">
      <div className="w-full max-w-2xl space-y-8">
        
        <div>
          <h2 className="text-3xl font-bold mb-2">Settings</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Customize your Currenzy experience</p>
        </div>

        {/* Appearance Section */}
        <div className="bg-white dark:bg-[#151B2B] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-6 shadow-sm dark:shadow-none transition-colors duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-violet-100 dark:bg-violet-500/10 rounded-lg">
              <svg className="w-5 h-5 text-violet-600 dark:text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
            </div>
            <div>
              <h3 className="font-semibold">Appearance</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Customize how Currenzy looks</p>
            </div>
          </div>

          <div className="flex items-center justify-between bg-slate-50 dark:bg-[#1C2333] p-4 rounded-xl border border-slate-100 dark:border-transparent transition-colors duration-300">
            <div className="flex items-center gap-3 text-sm font-medium">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
              Dark Mode
              <span className="block text-xs text-slate-500 font-normal">Switch to dark theme</span>
            </div>
            <button 
              onClick={toggleDarkMode}
              className={`w-12 h-6 rounded-full transition-colors relative ${isDarkMode ? 'bg-violet-600' : 'bg-slate-300'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${isDarkMode ? 'translate-x-6' : 'translate-x-1'}`}></div>
            </button>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="bg-white dark:bg-[#151B2B] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-6 shadow-sm dark:shadow-none transition-colors duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-violet-100 dark:bg-violet-500/10 rounded-lg">
              <svg className="w-5 h-5 text-violet-600 dark:text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            </div>
            <div>
              <h3 className="font-semibold">Preferences</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Configure your defaults</p>
            </div>
          </div>

          <div className="flex items-center justify-between bg-slate-50 dark:bg-[#1C2333] p-4 rounded-xl border border-slate-100 dark:border-transparent transition-colors duration-300">
            <div className="text-sm font-medium">
              Default Currency
              <span className="block text-xs text-slate-500 font-normal">Your primary currency</span>
            </div>
            <select 
              value={defaultCurrency}
              onChange={(e) => setDefaultCurrency(e.target.value)}
              className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm rounded-lg px-3 py-2 outline-none border border-slate-200 dark:border-slate-700 transition-colors"
            >
              <option value="USD">🇺🇸 USD</option>
              <option value="EUR">🇪🇺 EUR</option>
              <option value="NGN">🇳🇬 NGN</option>
            </select>
          </div>
        </div>

      </div>
    </div>
  );
}