import { useEffect, useState } from "react"

const API_KEY = import.meta.env.VITE_EXCHANGE_API_KEY

function Converter() {
  const [amount, setAmount] = useState(1)
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("NGN")
  const [rates, setRates] = useState({})
  const [result, setResult] = useState(null)
  const [error, setError] = useState("")

  useEffect(() => {
    async function fetchRates() {
      try {
        setError("")
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`
        )
        const data = await response.json()

        if (data.result !== "success") {
          throw new Error("Failed to fetch exchange rates")
        }

        setRates(data.conversion_rates)
      } catch (err) {
        setError("Unable to fetch exchange rates. Try again later.")
      }
    }

    fetchRates()
  }, [fromCurrency])

  useEffect(() => {
    if (rates[toCurrency]) {
      setResult(amount * rates[toCurrency])
    }
  }, [amount, toCurrency, rates])

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Currency Converter
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
        )}

        <div className="space-y-4">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Amount"
          />

          <div className="flex gap-2">
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-1/2 border rounded-lg px-3 py-2"
            >
              {Object.keys(rates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>

            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-1/2 border rounded-lg px-3 py-2"
            >
              {Object.keys(rates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

          {result !== null && (
            <div className="text-center mt-4">
              <p className="text-lg font-semibold">
                {amount} {fromCurrency} =
              </p>
              <p className="text-2xl font-bold text-blue-600">
                {result.toFixed(2)} {toCurrency}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Converter