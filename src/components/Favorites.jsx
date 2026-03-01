export default function Favorites({ favorites, onSelect, onRemove }) {
  if (!favorites || favorites.length === 0) return null;

  return (
    <div className="mt-6 w-full max-w-lg">
      <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
        <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
        Favorite Pairs Watchlist
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {favorites.map((pair) => (
          <div
            key={`${pair.from}-${pair.to}`}
            className="flex items-center justify-between p-3 bg-white dark:bg-[#151B2B] border border-slate-200 dark:border-slate-800 rounded-xl hover:border-violet-400 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-[#1C2333] transition-all shadow-sm dark:shadow-none group"
          >
            {/* Clicking the text loads the pair into the converter */}
            <button
              onClick={() => onSelect(pair)}
              className="flex-1 text-left font-semibold text-slate-900 dark:text-white text-sm"
            >
              {pair.from} <span className="text-slate-400 font-normal mx-1">→</span> {pair.to}
            </button>
            
            {/* Clicking the X removes it from favorites */}
            <button 
              onClick={() => onRemove(pair)}
              className="text-slate-300 hover:text-red-500 dark:text-slate-600 dark:hover:text-red-400 transition-colors p-1"
              title="Remove from favorites"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}