import './globals.css';
import Navbar from '../components/Navbar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mieraf | software engineer',
  description: 'Modern professional portfolio website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>        
        <Navbar />
        {children}
      </body>
    </html>
  );
}