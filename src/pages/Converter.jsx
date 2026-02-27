import { useEffect, useState } from "react"
import AmountInput from "../components/AmountInput"
import CurrencySelector from "../components/CurrencySelector"
import ConversionResult from "../components/ConversionResult"
import { fetchExchangeRates } from "../services/exchangeApi"

function Converter() {
  const [amount, setAmount] = useState(5)
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("NGN")
  const [rates, setRates] = useState({})
  const [result, setResult] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function loadRates() {
      try {
        setLoading(true)
        setError("")
        const data = await fetchExchangeRates(fromCurrency)
        setRates(data)
      } catch {
        setError("Unable to fetch exchange rates.")
      } finally {
        setLoading(false)
      }
    }

    loadRates()
  }, [fromCurrency])

  useEffect(() => {
    if (rates[toCurrency]) {
      setResult(amount * rates[toCurrency])
    }
  }, [amount, toCurrency, rates])

  const currencies = Object.keys(rates)

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Currency Converter
        </h2>

        {loading && (
          <p className="text-center text-gray-500">Loading rates…</p>
        )}

        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
        )}

        {!loading && (
          <div className="space-y-4">
            <AmountInput amount={amount} onChange={setAmount} />

            <div className="flex gap-2">
              <CurrencySelector
                value={fromCurrency}
                onChange={setFromCurrency}
                currencies={currencies}
              />
              <CurrencySelector
                value={toCurrency}
                onChange={setToCurrency}
                currencies={currencies}
              />
            </div>

            <ConversionResult
              amount={amount}
              from={fromCurrency}
              to={toCurrency}
              result={result}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Converter