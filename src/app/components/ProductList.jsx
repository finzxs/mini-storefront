'use client';

import ProductCard from './ProductCard';

export default function ProductList({ products, onAdd }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map(p => (
        <li key={p.id}>
          <ProductCard product={p} onAdd={() => onAdd(p)} />
        </li>
      ))}
    </ul>
  );
}
