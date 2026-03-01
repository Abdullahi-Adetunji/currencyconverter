export default function AmountInput({ amount, setAmount }) {
  return (
    <input
      type="number"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      placeholder="Enter amount"
    />
  )
}