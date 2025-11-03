'use client';

export default function PriceFilter({ min, max, onMinChange, onMaxChange }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <label className="block">
        <span className="text-sm font-medium">Min $</span>
        <input
          inputMode="numeric"
          className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
          value={min}
          onChange={e => onMinChange(e.target.value.replace(/[^\d]/g, ''))}
          placeholder="0"
        />
      </label>
      <label className="block">
        <span className="text-sm font-medium">Max $</span>
        <input
          inputMode="numeric"
          className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
          value={max}
          onChange={e => onMaxChange(e.target.value.replace(/[^\d]/g, ''))}
          placeholder="2000"
        />
      </label>
    </div>
  );
}
