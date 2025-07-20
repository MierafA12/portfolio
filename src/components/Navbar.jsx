import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/maf.png';
import { FaTelegramPlane } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="w-[95%] ml-10  fixed top-10 z-50 flex justify-between items-center py-3 px-6 md:px-10 bg-white text-gray-900 border border-gray-300 rounded-full shadow-inner backdrop-blur-md">
      <div className="flex items-center gap-2 mx-4">
        <Image src={logo} alt="Logo" width={80} height={80} className="object-contain" />
      </div>

      <ul className="hidden md:flex gap-6 font-medium text-sm uppercase tracking-wide">
        <li><Link href="/" className="hover:text-[#C33235] transition">Home</Link></li>
        <li><Link href="/about" className="hover:text-[#C33235] transition">About Me</Link></li>
        <li><Link href="/services" className="hover:text-[#C33235] transition">Services</Link></li>
        <li><Link href="/projects" className="hover:text-[#C33235] transition">Projects</Link></li>
        <li><Link href="/blog" className="hover:text-[#C33235] transition">Blog</Link></li>
        <li><Link href="/contact" className="hover:text-[#C33235] transition">Contact</Link></li>
      </ul>

      <div className="hidden md:flex items-center mx-4">
        <Link
          href="https://t.me/mafi124679"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#C33235] text-white px-5 py-2 rounded-full font-semibold hover:bg-red-600 transition text-sm"
        >
          <FaTelegramPlane className="text-lg" />
          Let's Talk
        </Link>
      </div>
    </nav>
  );
}
