import { useState } from "react"
import AmountInput from "../components/AmountInput"
import CurrencySelector from "../components/CurrencySelector"

export default function Converter() {
  const [amount, setAmount] = useState(1)
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("NGN")

  const currencies = ["USD", "NGN", "EUR", "GBP"]

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Currency Converter
        </h2>

        <AmountInput
          amount={amount}
          onChange={setAmount}
        />

        <CurrencySelector
          label="From"
          value={fromCurrency}
          onChange={setFromCurrency}
          currencies={currencies}
        />

        <CurrencySelector
          label="To"
          value={toCurrency}
          onChange={setToCurrency}
          currencies={currencies}
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          Convert
        </button>

        <div className="mt-6 text-center text-lg font-semibold">
          Converted Amount: —
        </div>
      </div>
    </div>
  )
}