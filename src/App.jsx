import { useState } from 'react';
import Landing from './pages/Landing';
import Converter from './pages/Converter';
import Settings from './components/Settings';

export default function App() {
  const [currentView, setCurrentView] = useState('landing');

  const renderView = () => {
    switch (currentView) {
      case 'landing':
        return <Landing onStart={() => setCurrentView('converter')} />;
      case 'converter':
        return <Converter />;
      case 'settings':
        return <Settings />;
      case 'history':
        return (
          <div className="flex justify-center items-center h-[60vh] text-slate-500 dark:text-slate-400">
            History feature coming soon...
          </div>
        );
      default:
        return <Landing onStart={() => setCurrentView('converter')} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0B0F19] dark:text-white font-sans selection:bg-violet-500/30 transition-colors duration-300">
      
      {currentView !== 'landing' && (
        <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto border-b border-slate-200 dark:border-slate-800/50 transition-colors duration-300">
          
          <button onClick={() => setCurrentView('landing')} className="flex items-center gap-2 transition hover:opacity-80">
            <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center shadow-md">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Currenzy</span>
          </button>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button 
              onClick={() => setCurrentView('converter')}
              className={`transition ${currentView === 'converter' ? 'text-violet-600 dark:text-white font-semibold' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}`}
            >
              Converter
            </button>
            <button 
              onClick={() => setCurrentView('history')}
              className={`transition ${currentView === 'history' ? 'text-violet-600 dark:text-white font-semibold' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}`}
            >
              History
            </button>
            
            <button 
              onClick={() => setCurrentView('settings')}
              className={`transition p-2 rounded-lg ${currentView === 'settings' ? 'bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-white' : 'text-slate-500 hover:bg-slate-200 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800/50'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </button>
          </div>
        </nav>
      )}

      <main>
        {renderView()}
      </main>
      
    </div>
  );
}