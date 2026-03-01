import { useState } from "react"

export default function RateAlert({ rate }) {
  const [target, setTarget] = useState("")
  const [alerted, setAlerted] = useState(false)

  if (!rate) return null

  if (target && rate >= target && !alerted) {
    alert("🎯 Target rate reached!")
    setAlerted(true)
  }

  return (
    <div className="border-t pt-4">
      <input
        type="number"
        placeholder="Set rate alert"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        className="w-full border rounded-lg px-3 py-2"
      />
    </div>
  )
}