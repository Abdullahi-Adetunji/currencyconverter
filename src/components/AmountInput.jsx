export default function AmountInput({ amount, setAmount, readOnly = false }) {
  return (
    <input
      type="number"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      readOnly={readOnly}
      className="w-full bg-transparent text-3xl font-bold text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors"
      placeholder="0.00"
    />
  )
}