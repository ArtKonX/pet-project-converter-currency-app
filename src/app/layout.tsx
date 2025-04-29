'use client'

import { Provider } from 'react-redux';

import "./globals.scss";
import Header from "@/components/Header/Header";
import store from '@/redux/store';
import Footer from '@/components/Footer/Footer';
import { useEffect } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    document.title = 'ConverterApp';
  }, []);

  return (
    <html lang="ru">
      <body>
        <Provider store={store}>
          <div className="container">
            <Header />
            {children}
            <Footer />
          </div>
        </ Provider>
      </body>
    </html>
  );
}
