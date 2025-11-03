'use client';

export default function ProductCard({ product, onAdd }) {
  const out = product.stock === 0;

  return (
    <div className="h-full rounded-xl border bg-white p-4 shadow-sm flex flex-col">
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="mt-2 text-xl font-bold">${product.price}</p>
        <p className={`mt-1 text-sm ${out ? 'text-red-600' : 'text-gray-600'}`}>
          {out ? 'Out of stock' : `In stock: ${product.stock}`}
        </p>
      </div>

      <button
        onClick={onAdd}
        disabled={out}
        className={`mt-4 w-full rounded-lg px-3 py-2 text-sm font-medium
          ${out
            ? 'cursor-not-allowed bg-gray-200 text-gray-500'
            : 'bg-black text-white hover:bg-gray-800'}
        `}
      >
        {out ? 'Unavailable' : 'Add to Cart'}
      </button>
    </div>
  );
}
