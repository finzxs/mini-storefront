'use client';

export default function StatusMessage({ type, text }) {
  const styles = {
    loading: 'bg-blue-50 text-blue-700 border-blue-200',
    error:   'bg-red-50  text-red-700  border-red-200',
    empty:   'bg-gray-50 text-gray-700 border-gray-200',
  }[type] || 'bg-gray-50 text-gray-700 border-gray-200';

  return (
    <div className={`rounded-xl border p-4 ${styles}`}>
      <p className="text-sm">{text}</p>
    </div>
  );
}
