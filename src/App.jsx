import Landing from "./pages/Landing"
import Converter from "./pages/Converter"
import { useState } from "react"

function App() {
  const [currentPage, setCurrentPage] = useState("landing")

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage === "landing" && (
        <Landing onStart={() => setCurrentPage("converter")} />
      )}

      {currentPage === "converter" && <Converter />}
    </div>
  )
}

export default App