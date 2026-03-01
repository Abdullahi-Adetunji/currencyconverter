const API_KEY = import.meta.env.VITE_EXCHANGE_API_KEY
const BASE_URL = "https://v6.exchangerate-api.com/v6"

export async function fetchExchangeRates(baseCurrency) {
  const response = await fetch(
    `${BASE_URL}/${API_KEY}/latest/${baseCurrency}`
  )

  const data = await response.json()

  if (data.result !== "success") {
    throw new Error("Failed to fetch exchange rates")
  }

  return data.conversion_rates
}


export async function fetchRates(baseCurrency) {
  const res = await fetch(`${BASE_URL}/${API_KEY}/latest/${baseCurrency}`)
  const data = await res.json()
  return data.conversion_rates
}