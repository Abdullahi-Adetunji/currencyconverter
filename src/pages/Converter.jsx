import { useEffect, useState } from "react"
import AmountInput from "../components/AmountInput"
import CurrencySelector from "../components/CurrencySelector"
import ConversionResult from "../components/ConversionResult"
import Favorites from "../components/Favorites"
import { fetchExchangeRates } from "../services/exchangeApi"

function Converter() {
  const [amount, setAmount] = useState(5)
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("NGN")
  const [rates, setRates] = useState({})
  const [result, setResult] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem("favorites")
    if (stored) setFavorites(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

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

  function addFavorite() {
    const exists = favorites.some(
      (fav) => fav.from === fromCurrency && fav.to === toCurrency
    )

    if (!exists) {
      setFavorites([...favorites, { from: fromCurrency, to: toCurrency }])
    }
  }

  function selectFavorite(fav) {
    setFromCurrency(fav.from)
    setToCurrency(fav.to)
  }

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

            <button
              onClick={addFavorite}
              className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              ⭐ Save Favorite
            </button>

            <ConversionResult
              amount={amount}
              from={fromCurrency}
              to={toCurrency}
              result={result}
            />

            <Favorites favorites={favorites} onSelect={selectFavorite} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Converter