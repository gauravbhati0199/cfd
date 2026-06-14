import { Footer, Header } from '@/components';
import './globals.css';

export const metadata = {
  title: 'Vistaar Media',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
