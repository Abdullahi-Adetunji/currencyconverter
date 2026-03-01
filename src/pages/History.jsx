import { useEffect, useState } from "react";

export default function History() {
  const [history, setHistory] = useState([]);

  // Load the history from localStorage when the page loads
  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("currencyHistory")) || [];
    setHistory(savedHistory);
  }, []);

  const clearHistory = () => {
    localStorage.removeItem("currencyHistory");
    setHistory([]);
  };

  return (
    <div className="flex justify-center py-12 px-4 transition-colors duration-300">
      <div className="w-full max-w-3xl space-y-8">
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Conversion History</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Your recent currency conversions</p>
          </div>
          {history.length > 0 && (
            <button 
              onClick={clearHistory}
              className="px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/10 rounded-lg hover:bg-red-100 dark:hover:bg-red-500/20 transition-colors"
            >
              Clear History
            </button>
          )}
        </div>

        {history.length === 0 ? (
          <div className="bg-white dark:bg-[#151B2B] border border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center shadow-sm dark:shadow-none transition-colors duration-300">
            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">No history yet</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Convert some currencies to see them appear here.</p>
          </div>
        ) : (
          <div className="bg-white dark:bg-[#151B2B] border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm dark:shadow-none transition-colors duration-300">
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {history.map((record) => (
                <div key={record.id} className="p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-violet-100 dark:bg-violet-500/10 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-violet-600 dark:text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-slate-900 dark:text-white">{record.amount} {record.from}</span>
                        <span className="text-slate-400">→</span>
                        <span className="font-semibold text-violet-600 dark:text-violet-400">{record.result} {record.to}</span>
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                        <span>{record.date}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                        <span>Rate: {record.rate}</span>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}