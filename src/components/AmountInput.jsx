export default function AmountInput({ amount, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">
        Amount
      </label>

      <input
        type="number"
        value={amount}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter amount"
        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}