'use client';

export default function ProductCard({ product, onAdd }) {
  const out = product.stock === 0;

  return (
    <div className="glass soft-shadow h-full rounded-2xl p-5 flex flex-col">
      {/* Image placeholder (feel free to swap with real images later) */}
      <div className="mb-4 aspect-[16/9] w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200" />

      <div className="flex-1">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <span
            className={`badge ${out ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'}`}
          >
            {out ? 'Out' : `In: ${product.stock}`}
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-1">{product.category}</p>
        <p className="price mt-3">${product.price}</p>
      </div>

      <button
        onClick={onAdd}
        disabled={out}
        className={`btn btn-primary btn-sheen mt-4 w-full
          ${out ? 'opacity-40 cursor-not-allowed' : ''}
        `}
      >
        {out ? 'Unavailable' : 'Add to Cart'}
      </button>
    </div>
  );
}
