export default function HistoricalChart({ from, to }) {
  return (
    <div className="bg-white dark:bg-[#151B2B] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 text-sm text-slate-500 dark:text-slate-400 flex flex-col items-center justify-center min-h-[150px] shadow-sm dark:shadow-none transition-colors duration-300">
      <svg className="w-8 h-8 mb-2 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
      <div className="flex items-center gap-1">
        Historical chart for <span className="font-semibold text-slate-700 dark:text-slate-300">{from} → {to}</span> (Coming Soon)
      </div>
    </div>
  )
}