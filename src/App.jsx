import { useState } from "react"
import Landing from "./pages/Landing"
import Converter from "./pages/Converter"

function App() {
  const [page, setPage] = useState("landing")

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      {page === "landing" && <Landing onStart={() => setPage("converter")} />}
      {page === "converter" && <Converter />}
    </div>
  )
}

export default App