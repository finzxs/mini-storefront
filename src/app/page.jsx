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
      <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
  Mini Storefront
</h1>
<p className="text-xs text-gray-500">Next.js App Router • Tailwind • No TypeScript</p>
        <Catalog />
      </div>
    </main>
  );
};
