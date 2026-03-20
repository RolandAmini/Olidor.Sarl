import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/contexts/CartContext.';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Olidor Sarl - Plus sain, plus efficace',
  description: 'Solutions nutritionnelles en RDC',
};

// On ajoute le typage ici : { children }: { children: React.ReactNode }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}