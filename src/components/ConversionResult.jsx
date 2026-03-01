export default function ConversionResult({ result }) {
  return (
    <div className="text-center text-xl font-semibold text-indigo-600">
      {result ? `Converted Amount: ${result}` : "—"}
    </div>
  )
}