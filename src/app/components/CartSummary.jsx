'use client';

export default function CartSummary({
  cart,
  products,
  itemCount,
  total,
  onDecrement,
  onReset,
}) {
  const items = Object.entries(cart)
    .map(([id, qty]) => {
      const p = products.find(x => x.id === id);
      return p ? { ...p, qty } : null;
    })
    .filter(Boolean);

  return (
    <div className="glass rounded-2xl p-4 soft-shadow">
      <h2 className="font-semibold mb-3">Cart</h2>

      {items.length === 0 ? (
        <p className="text-sm text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="space-y-2">
          {items.map(it => (
            <li key={it.id} className="flex items-center justify-between text-sm">
              <div>
                <p className="font-medium">{it.name}</p>
                <p className="text-gray-500">${it.price} × {it.qty}</p>
              </div>
              <button
                onClick={() => onDecrement(it.id)}
                className="btn rounded-md border px-2 py-1 hover:bg-gray-50"
                aria-label={`decrement ${it.name}`}
              >
                −
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="text-gray-600">Items: <strong>{itemCount}</strong></span>
        <span className="font-semibold">${total.toFixed(2)}</span>
      </div>

      <button
        onClick={onReset}
        className="btn mt-3 w-full rounded-lg border px-3 py-2 text-sm hover:bg-gray-50"
      >
        Reset Cart
      </button>
    </div>
  );
}

