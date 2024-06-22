import type { Metadata } from 'next';
import { Inter, Raleway } from 'next/font/google';
import './globals.css';
import Header from './_components/Header';
import Footer from './_components/Footer';
import { Toaster } from '@/components/ui/toaster';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'slash blog',
  description: "Let's write a new blog post!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <div className="tracking-wide pb-0">
          <Toaster />
          <Header />
          <main className="mt-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
