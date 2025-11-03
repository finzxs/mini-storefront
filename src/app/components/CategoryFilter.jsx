'use client';

export default function CategoryFilter({ value, options, onChange }) {
  return (
    <label className="block">
      <span className="text-sm font-medium">Category</span>
      <select
        className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </label>
  );
}
