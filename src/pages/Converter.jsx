import { useEffect, useState } from "react"
import { fetchRates } from "../services/api"
import CurrencySelector from "../components/CurrencySelector"
import AmountInput from "../components/AmountInput"
import ConversionResult from "../components/ConversionResult"
import RateAlert from "../components/RateAlert"
import HistoricalChart from "../components/HistoricalChart"
import Favorites from "../components/Favorites"

export default function Converter() {
  const [amount, setAmount] = useState(1000)
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("EUR")
  const [rates, setRates] = useState({})
  const [result, setResult] = useState(null)
  
  // NEW: State for the Watchlist
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    fetchRates(from).then(setRates)
  }, [from])

  // NEW: Load manual favorites on mount
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favoritePairs")) || [];
    setFavorites(savedFavorites);
  }, [])

  const handleConvert = () => {
    if (rates[to]) {
      const calculatedResult = (amount * rates[to]).toFixed(2);
      setResult(calculatedResult);

      // Save to History (Hidden in the History Tab)
      const historyRecord = {
        id: Date.now(),
        date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }),
        from, to, amount, result: calculatedResult, rate: rates[to].toFixed(4)
      };
      const existingHistory = JSON.parse(localStorage.getItem("currencyHistory")) || [];
      localStorage.setItem("currencyHistory", JSON.stringify([historyRecord, ...existingHistory].slice(0, 30)));
    }
  }

  const handleSwap = () => {
    setFrom(to); setTo(from); setResult(null);
  }

  // --- FAVORITES LOGIC ---
  
  // Check if the current dropdown combination is already a favorite
  const isFavorite = favorites.some(p => p.from === from && p.to === to);

  const toggleFavorite = () => {
    let newFavorites;
    if (isFavorite) {
      // Remove it
      newFavorites = favorites.filter(p => !(p.from === from && p.to === to));
    } else {
      // Add it
      newFavorites = [...favorites, { from, to }];
    }
    setFavorites(newFavorites);
    localStorage.setItem("favoritePairs", JSON.stringify(newFavorites));
  }

  const handleSelectFavorite = (pair) => {
    setFrom(pair.from); setTo(pair.to); setResult(null);
  }

  const handleRemoveFavorite = (pair) => {
    const newFavorites = favorites.filter(p => !(p.from === pair.from && p.to === pair.to));
    setFavorites(newFavorites);
    localStorage.setItem("favoritePairs", JSON.stringify(newFavorites));
  }

  return (
    <div className="flex flex-col items-center py-12 px-4 transition-colors duration-300">
      
      <div className="text-center mb-8 space-y-2">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Currency Converter</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Real-time exchange rates • Updated every second</p>
      </div>

      <div className="bg-white dark:bg-[#151B2B] border border-slate-200 dark:border-slate-800 rounded-3xl p-2 w-full max-w-lg shadow-xl dark:shadow-2xl relative space-y-1 transition-colors duration-300">
        
        <div className="bg-slate-50 hover:bg-slate-100 dark:bg-[#1C2333] dark:hover:bg-[#20283A] transition-colors rounded-2xl p-5 flex flex-col gap-3">
          <label className="text-slate-500 dark:text-slate-400 text-sm font-medium">You send</label>
          <div className="flex justify-between items-center gap-4">
            <AmountInput amount={amount} setAmount={setAmount} />
            <CurrencySelector value={from} onChange={setFrom} currencies={Object.keys(rates)} />
          </div>
        </div>

        <div className="absolute left-1/2 top-[108px] -translate-x-1/2 -translate-y-1/2 z-10">
          <button onClick={handleSwap} className="bg-violet-600 hover:bg-violet-500 text-white p-2 rounded-full border-4 border-white dark:border-[#151B2B] transition-transform hover:rotate-180">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>
          </button>
        </div>

        <div className="bg-slate-50 hover:bg-slate-100 dark:bg-[#1C2333] dark:hover:bg-[#20283A] transition-colors rounded-2xl p-5 flex flex-col gap-3">
          <label className="text-slate-500 dark:text-slate-400 text-sm font-medium">You receive</label>
          <div className="flex justify-between items-center gap-4">
            <AmountInput amount={result || ""} setAmount={() => {}} readOnly={true} />
            <CurrencySelector value={to} onChange={setTo} currencies={Object.keys(rates)} />
          </div>
        </div>

        <div className="p-4">
          <ConversionResult rate={rates[to]} from={from} to={to} />
          
          {/* NEW: Star Button and Convert Button side-by-side */}
          <div className="flex gap-2 mt-4">
            <button 
              onClick={toggleFavorite}
              className={`p-4 rounded-xl border-2 transition-colors flex items-center justify-center ${isFavorite ? 'border-amber-400 bg-amber-50 dark:bg-amber-400/10 text-amber-500' : 'border-slate-200 dark:border-slate-700 text-slate-400 hover:text-amber-500 hover:border-amber-200 dark:hover:border-amber-500/50'}`}
              title={isFavorite ? "Remove from Favorites" : "Save to Favorites"}
            >
              <svg className="w-6 h-6" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
            </button>
            <button 
              onClick={handleConvert}
              className="flex-1 bg-violet-600 hover:bg-violet-700 dark:hover:bg-violet-500 text-white font-semibold py-4 rounded-xl transition-colors shadow-lg shadow-violet-600/20"
            >
              Convert Currency
            </button>
          </div>
        </div>
      </div>

      {/* UPDATED FAVORITES WIDGET */}
      <Favorites favorites={favorites} onSelect={handleSelectFavorite} onRemove={handleRemoveFavorite} />

      <div className="w-full max-w-lg mt-8 space-y-6">
        <RateAlert rate={rates[to]} />
        <HistoricalChart from={from} to={to} />
      </div>
      
    </div>
  )
}