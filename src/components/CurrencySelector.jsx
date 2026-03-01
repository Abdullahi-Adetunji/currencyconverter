export default function CurrencySelector({ value, onChange, currencies }) {
  return (
    <div className="relative shrink-0">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-slate-200 hover:bg-slate-300 dark:bg-slate-700/50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium rounded-xl pl-4 pr-10 py-2.5 outline-none cursor-pointer transition-colors w-[100px]"
      >
        {currencies && currencies.length > 0 ? (
          currencies.map((cur) => (
            <option key={cur} value={cur} className="bg-white dark:bg-slate-800">{cur}</option>
          ))
        ) : (
          <option>USD</option>
        )}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500 dark:text-slate-400">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
        </svg>
      </div>
    </div>
  )
}