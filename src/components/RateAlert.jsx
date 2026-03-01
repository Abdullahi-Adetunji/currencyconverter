import { useState, useEffect } from "react"

export default function RateAlert({ rate }) {
  const [target, setTarget] = useState("")
  const [savedAlert, setSavedAlert] = useState(null)
  const [showNotification, setShowNotification] = useState(false)

  // 1. Load any saved alert from local storage when component mounts
  useEffect(() => {
    const storedAlert = localStorage.getItem("rateAlert")
    if (storedAlert) {
      setSavedAlert(JSON.parse(storedAlert))
    }
  }, [])

  // 2. Check if the current rate meets the saved alert target
  useEffect(() => {
    if (savedAlert && rate && rate >= savedAlert.target && !savedAlert.triggered) {
      setShowNotification(true)
      
      // Mark as triggered so we don't spam the user every second
      const updatedAlert = { ...savedAlert, triggered: true }
      setSavedAlert(updatedAlert)
      localStorage.setItem("rateAlert", JSON.stringify(updatedAlert))
    }
  }, [rate, savedAlert])

  // 3. Save a new alert
  const handleSaveAlert = () => {
    if (!target) return
    const newAlert = { target: parseFloat(target), triggered: false }
    setSavedAlert(newAlert)
    localStorage.setItem("rateAlert", JSON.stringify(newAlert))
    setTarget("") // clear input
  }

  // 4. Clear the alert
  const handleClearAlert = () => {
    setSavedAlert(null)
    localStorage.removeItem("rateAlert")
    setShowNotification(false)
  }

  return (
    <div className="bg-white dark:bg-[#151B2B] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm dark:shadow-none transition-colors duration-300 relative overflow-hidden">
      
      {/* BEAUTIFUL CUSTOM TOAST NOTIFICATION */}
      {showNotification && (
        <div className="absolute inset-0 bg-emerald-500/95 flex flex-col items-center justify-center z-10 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <svg className="w-8 h-8 text-white mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <p className="text-white font-bold text-lg">Target Rate Reached!</p>
          <p className="text-emerald-100 text-sm mb-3">The rate is now {rate.toFixed(4)}</p>
          <button 
            onClick={() => setShowNotification(false)}
            className="px-4 py-1.5 bg-white text-emerald-600 rounded-full text-sm font-semibold hover:bg-emerald-50 transition-colors"
          >
            Dismiss
          </button>
        </div>
      )}

      <div className="flex items-center gap-2 mb-4">
        <svg className="w-5 h-5 text-violet-600 dark:text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Rate Alerts</h3>
      </div>

      {savedAlert && !savedAlert.triggered ? (
        <div className="flex items-center justify-between bg-violet-50 dark:bg-violet-500/10 p-3 rounded-xl border border-violet-100 dark:border-violet-500/20">
          <div className="text-sm">
            <span className="text-slate-500 dark:text-slate-400">Alert me at: </span>
            <span className="font-bold text-violet-600 dark:text-violet-400">{savedAlert.target}</span>
          </div>
          <button onClick={handleClearAlert} className="text-slate-400 hover:text-red-500 transition-colors text-xs font-medium">
            Cancel
          </button>
        </div>
      ) : (
        <div className="flex gap-2">
          <input
            type="number"
            step="0.0001"
            placeholder="e.g. 0.8500"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="flex-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-violet-500 transition-colors"
          />
          <button 
            onClick={handleSaveAlert}
            disabled={!target}
            className="px-4 py-2 bg-slate-900 dark:bg-violet-600 text-white rounded-xl text-sm font-medium hover:bg-slate-800 dark:hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Set
          </button>
        </div>
      )}
    </div>
  )
}