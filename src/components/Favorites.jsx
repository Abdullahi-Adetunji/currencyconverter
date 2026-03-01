function Favorites({ favorites, onSelect }) {
  if (favorites.length === 0) return null

  return (
    <div className="mt-4">
      <h3 className="text-sm font-semibold mb-2">Favorites</h3>
      <div className="flex flex-wrap gap-2">
        {favorites.map((fav, index) => (
          <button
            key={index}
            onClick={() => onSelect(fav)}
            className="px-3 py-1 text-sm bg-gray-200 rounded-full hover:bg-gray-300"
          >
            {fav.from} → {fav.to}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Favorites