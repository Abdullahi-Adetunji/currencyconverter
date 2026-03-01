import { useState } from "react"

export default function RateAlert({ rate }) {
  const [target, setTarget] = useState("")
  const [alerted, setAlerted] = useState(false)

  if (!rate) return null

  if (target && rate >= target && !alerted) {
    alert("🎯 Target rate reached!")
    setAlerted(true)
  }

  return (
    <div className="bg-white dark:bg-[#151B2B] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex items-center justify-between shadow-sm dark:shadow-none transition-colors duration-300">
      <div className="text-sm text-slate-700 dark:text-slate-300 font-medium flex items-center gap-2">
        <svg className="w-5 h-5 text-violet-600 dark:text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
        Set Rate Alert
      </div>
      <input
        type="number"
        placeholder="e.g. 0.86"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        className="w-24 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-violet-500 dark:focus:border-violet-500 text-right transition-colors duration-300"
      />
    </div>
  )
}