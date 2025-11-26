import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="p-4 border-b">
          <nav>
            <a href="/" className="mr-4">Home</a>
            <a href="/about" className="mr-4">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}


