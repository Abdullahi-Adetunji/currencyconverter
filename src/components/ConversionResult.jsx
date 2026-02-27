function ConversionResult({ amount, from, to, result }) {
  if (result === null) return null

  return (
    <div className="text-center mt-4">
      <p className="text-lg font-semibold">
        {amount} {from} =
      </p>
      <p className="text-2xl font-bold text-blue-600">
        {result.toFixed(2)} {to}
      </p>
    </div>
  )
}

export default ConversionResult