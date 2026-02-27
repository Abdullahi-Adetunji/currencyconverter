function AmountInput({ amount, onChange }) {
  return (
    <input
      type="number"
      value={amount}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full border rounded-lg px-3 py-2"
      placeholder="Amount"
    />
  )
}

export default AmountInput