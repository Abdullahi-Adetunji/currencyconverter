import { useEffect, useState } from "react"
import { fetchRates } from "../services/api"
import CurrencySelector from "../components/CurrencySelector"
import AmountInput from "../components/AmountInput"
import ConversionResult from "../components/ConversionResult"
import RateAlert from "../components/RateAlert"
import HistoricalChart from "../components/HistoricalChart"

export default function Converter() {
  const [amount, setAmount] = useState(1000)
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("EUR")
  const [rates, setRates] = useState({})
  const [result, setResult] = useState(null)

  useEffect(() => {
    fetchRates(from).then(setRates)
  }, [from])

  useEffect(() => {
    if (rates[to]) {
      setResult((amount * rates[to]).toFixed(2))
    }
  }, [amount, to, rates])

  const handleSwap = () => {
    setFrom(to)
    setTo(from)
  }

  return (
    <div className="flex flex-col items-center py-12 px-4 transition-colors duration-300">
      
      <div className="text-center mb-8 space-y-2">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Currency Converter</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Real-time exchange rates • Updated every second</p>
      </div>

      {/* Main Converter Card */}
      <div className="bg-white dark:bg-[#151B2B] border border-slate-200 dark:border-slate-800 rounded-3xl p-2 w-full max-w-lg shadow-xl dark:shadow-2xl relative space-y-1 transition-colors duration-300">
        
        {/* You Send Section */}
        <div className="bg-slate-50 hover:bg-slate-100 dark:bg-[#1C2333] dark:hover:bg-[#20283A] transition-colors rounded-2xl p-5 flex flex-col gap-3">
          <label className="text-slate-500 dark:text-slate-400 text-sm font-medium">You send</label>
          <div className="flex justify-between items-center gap-4">
            <AmountInput amount={amount} setAmount={setAmount} />
            <CurrencySelector value={from} onChange={setFrom} currencies={Object.keys(rates)} />
          </div>
        </div>

        {/* Swap Button */}
        <div className="absolute left-1/2 top-[108px] -translate-x-1/2 -translate-y-1/2 z-10">
          <button 
            onClick={handleSwap}
            className="bg-violet-600 hover:bg-violet-500 text-white p-2 rounded-full border-4 border-white dark:border-[#151B2B] transition-transform hover:rotate-180"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>
          </button>
        </div>

        {/* You Receive Section */}
        <div className="bg-slate-50 hover:bg-slate-100 dark:bg-[#1C2333] dark:hover:bg-[#20283A] transition-colors rounded-2xl p-5 flex flex-col gap-3">
          <label className="text-slate-500 dark:text-slate-400 text-sm font-medium">You receive</label>
          <div className="flex justify-between items-center gap-4">
            <AmountInput amount={result || ""} setAmount={() => {}} readOnly={true} />
            <CurrencySelector value={to} onChange={setTo} currencies={Object.keys(rates)} />
          </div>
        </div>

        <div className="p-4">
          <ConversionResult rate={rates[to]} from={from} to={to} />
          <button className="w-full bg-violet-600 hover:bg-violet-700 dark:hover:bg-violet-500 text-white font-semibold py-4 rounded-xl mt-4 transition-colors shadow-lg shadow-violet-600/20">
            Convert Currency
          </button>
        </div>
      </div>

      <div className="w-full max-w-lg mt-8 space-y-6">
        <RateAlert rate={rates[to]} />
        <HistoricalChart from={from} to={to} />
      </div>
      
    </div>
  )
}