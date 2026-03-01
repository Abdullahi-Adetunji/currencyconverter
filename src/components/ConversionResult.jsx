export default function ConversionResult({ rate, from, to }) {
  if (!rate) return null

  return (
    <div className="mt-2 bg-slate-50 dark:bg-[#1C2333] border border-slate-200 dark:border-slate-700/50 rounded-xl p-4 text-sm space-y-3 transition-colors duration-300">
      <div className="flex justify-between items-center">
        <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
          Exchange Rate
        </span>
        <span className="font-semibold text-slate-900 dark:text-white">1 {from} = {rate.toFixed(4)} {to}</span>
      </div>
    </div>
  )
}