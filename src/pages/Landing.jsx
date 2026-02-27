export default function Landing({ onStart }) {
  return (
    <div className="flex items-center justify-center min-h-screen px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Currenzy
        </h1>

        <p className="text-gray-600 mb-8">
          Convert currencies instantly using real-time exchange rates.
          Simple, fast, and reliable.
        </p>

        <button
          onClick={onStart}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Start Converting
        </button>
      </div>
    </div>
  )
}