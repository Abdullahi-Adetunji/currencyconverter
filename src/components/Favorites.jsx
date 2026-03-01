// function Favorites({ favorites, onSelect }) {
//   if (favorites.length === 0) return null

//   return (
//     <div className="mt-4">
//       <h3 className="text-sm font-semibold mb-2">Favorites</h3>
//       <div className="flex flex-wrap gap-2">
//         {favorites.map((fav, index) => (
//           <button
//             key={index}
//             onClick={() => onSelect(fav)}
//             className="px-3 py-1 text-sm bg-gray-200 rounded-full hover:bg-gray-300"
//           >
//             {fav.from} → {fav.to}
//           </button>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Favorites

export default function Favorites({ favorites, onSelect }) {
  if (!favorites || favorites.length === 0) return null

  return (
    <div className="mt-8">
      <h3 className="text-sm font-semibold text-white mb-4">Recent Conversions</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {favorites.map((fav, index) => (
          <button
            key={index}
            onClick={() => onSelect(fav)}
            className="flex flex-col items-start p-4 bg-[#151B2B] border border-slate-800 rounded-xl hover:border-slate-700 hover:bg-[#1A2235] transition-all text-left w-full"
          >
            <div className="flex justify-between w-full text-xs text-slate-400 mb-2">
              <span>{fav.from} → {fav.to}</span>
              <span>1 hour ago</span>
            </div>
            <div className="text-white font-medium">
              1,000 → <span className="text-slate-300">{(1000 * fav.rate).toFixed(2)}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}