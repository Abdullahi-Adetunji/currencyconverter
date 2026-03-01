import { useEffect, useState } from "react"
import { fetchRates } from "../services/api"
import CurrencySelector from "../components/CurrencySelector"
import AmountInput from "../components/AmountInput"
import ConversionResult from "../components/ConversionResult"
import RateAlert from "../components/RateAlert"
import HistoricalChart from "../components/HistoricalChart"

export default function Converter() {
  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("NGN")
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

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-lg space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Currency Converter
        </h2>

        <AmountInput amount={amount} setAmount={setAmount} />

        <div className="grid grid-cols-2 gap-4">
          <CurrencySelector
            label="From"
            value={from}
            onChange={setFrom}
            currencies={Object.keys(rates)}
          />
          <CurrencySelector
            label="To"
            value={to}
            onChange={setTo}
            currencies={Object.keys(rates)}
          />
        </div>

        <ConversionResult result={result} />

        <RateAlert rate={rates[to]} />
        <HistoricalChart from={from} to={to} />
      </div>
    </div>
  )
}