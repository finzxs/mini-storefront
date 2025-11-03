import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mini Storefront',
  description: 'React + Next.js demo storefront',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-[radial-gradient(1200px_800px_at_0%_0%,#f3f4f6,transparent),radial-gradient(900px_600px_at_100%_0%,#e5e7eb,transparent)]`}
      >
        {children}
      </body>
    </html>
  );
}
