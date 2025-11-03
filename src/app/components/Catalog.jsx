'use client';

import { useEffect, useMemo, useState } from 'react';
import ProductList from './ProductList';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import CartSummary from './CartSummary';
import StatusMessage from './StatusMessage';

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  // filters
  
  const [category, setCategory] = useState('All');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // cart: { [productId]: qty }

  const [cart, setCart] = useState({});

  // initial fetch

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch('/api/products', { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to load products');
        const data = await res.json();
        if (alive) {
          setProducts(data);
          setLoading(false);
        }
      } catch (e) {
        if (alive) {
          setError(e.message);
          setLoading(false);
        }
      }
    })();
    return () => { alive = false; };
  }, []);

  // simulate inventory changes every 6s; cleanup on unmount

  useEffect(() => {
    if (!products.length) return;
    const id = setInterval(() => {
      setProducts(prev =>
        prev.map(p => {
          // small random chance to decrement (never below 0)
          if (Math.random() < 0.25 && p.stock > 0) {
            return { ...p, stock: p.stock - 1 };
          }
          return p;
        })
      );
    }, 6000);
    return () => clearInterval(id);
  }, [products.length]);

  // derived categories

  const categories = useMemo(() => {
    const set = new Set(products.map(p => p.category));
    return ['All', ...Array.from(set)];
  }, [products]);

  // filtered products

  const filtered = useMemo(() => {
    let list = products;
    if (category !== 'All') list = list.filter(p => p.category === category);
    if (minPrice !== '') list = list.filter(p => p.price >= Number(minPrice || 0));
    if (maxPrice !== '') list = list.filter(p => p.price <= Number(maxPrice || Infinity));
    return list;
  }, [products, category, minPrice, maxPrice]);

  // cart handlers

  const addToCart = (product) => {
    if (product.stock <= 0) return;
    setCart(prev => ({ ...prev, [product.id]: (prev[product.id] || 0) + 1 }));
  };
  const decrementItem = (id) => {
    setCart(prev => {
      const qty = (prev[id] || 0) - 1;
      const next = { ...prev };
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });
  };
  const resetCart = () => setCart({});

  // totals

  const { itemCount, total } = useMemo(() => {
    let count = 0, sum = 0;
    for (const [id, qty] of Object.entries(cart)) {
      const p = products.find(x => x.id === id);
      if (!p) continue;
      count += qty;
      sum += qty * p.price;
    }
    return { itemCount: count, total: sum };
  }, [cart, products]);

  if (loading) return <StatusMessage type="loading" text="Loading products..." />;
  if (error)   return <StatusMessage type="error"   text={error} />;

  {/* Filters + Cart */}

  return (
    <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-4">
      <aside className="lg:col-span-1 space-y-4">
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <h2 className="font-semibold mb-3">Filters</h2>
          <CategoryFilter
            value={category}
            options={categories}
            onChange={setCategory}
          />
          <div className="mt-4">
            <PriceFilter
              min={minPrice}
              max={maxPrice}
              onMinChange={setMinPrice}
              onMaxChange={setMaxPrice}
            />
          </div>
        </div>

        <CartSummary
          cart={cart}
          products={products}
          itemCount={itemCount}
          total={total}
          onDecrement={decrementItem}
          onReset={resetCart}
        />
      </aside>

      {/* Catalog */}

      <div className="lg:col-span-3">
        {filtered.length === 0 ? (
          <StatusMessage type="empty" text="No products match your filter." />
        ) : (
          <ProductList products={filtered} onAdd={addToCart} />
        )}
      </div>
    </section>
  );
}
