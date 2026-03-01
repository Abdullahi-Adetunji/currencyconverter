export default function CurrencySelector({ label, value, onChange, currencies }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded-lg px-3 py-2"
      >
        {currencies.map((cur) => (
          <option key={cur}>{cur}</option>
        ))}
      </select>
    </div>
  )
}