import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/contexts/CartContext';
import { LanguageProvider } from '@/contexts/LanguageContext'; // 1. Ajoutez cet import
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

const GA_MEASUREMENT_ID = "G-YJSNBKEGJ6";

export const metadata = {
  title: 'Olidor Sarl - Plus sain, plus efficace',
  description: 'Solutions nutritionnelles en RDC',
  icons: {
    icon: '/icon.png', 
    apple: '/icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {/* 2. Enveloppez tout avec le LanguageProvider */}
        <LanguageProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}