import Catalog from './components/Catalog';

export const metadata = {
  title: 'Mini Storefront',
  description: 'React + Next.js demo storefront',
};

  // Server Component can render client components directly

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl p-6">
        <h1 className="text-3xl font-bold tracking-tight">Mini Storefront</h1>
        <p className="text-sm text-gray-500">Next.js App Router • Tailwind • No TypeScript</p>
        <Catalog />
      </div>
    </main>
  );
};
