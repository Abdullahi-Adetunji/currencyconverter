export default function Landing({ onStart }) {
  return (
    <div className="flex items-center justify-center min-h-screen text-white px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-5xl font-bold mb-6">Currenzy</h1>
        <p className="text-lg mb-8 opacity-90">
          Convert currencies instantly, track rates, set alerts, and view history.
        </p>
        <button
          onClick={onStart}
          className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Start Converting
        </button>
      </div>
    </div>
  )
}