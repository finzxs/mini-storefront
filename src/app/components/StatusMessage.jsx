'use client';

export default function StatusMessage({ type, text }) {
  if (type === 'loading') {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="glass rounded-2xl p-5">
            <div className="skeleton mb-4 h-36 w-full"></div>
            <div className="skeleton h-5 w-2/3 mb-2"></div>
            <div className="skeleton h-4 w-1/3"></div>
            <div className="skeleton mt-4 h-9 w-full"></div>
          </div>
        ))}
      </div>
    );
  }

  const tone =
    type === 'error'
      ? 'bg-red-50 text-red-700 border-red-200'
      : 'bg-gray-50 text-gray-700 border-gray-200';

  return (
    <div className={`rounded-2xl border p-4 ${tone}`}>{text}</div>
  );
}
