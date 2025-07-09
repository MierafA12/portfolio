import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full fixed top-10 z-50 flex justify-between items-center py-4 px-6 md:px-20 bg-white shadow-md text-gray-900 rounded-full border-t border-gray-200">
      <div className="flex items-center gap-2">
        <span className="w-10 h-10 bg-red-600 rounded-full text-white flex items-center justify-center text-xl font-bold">P</span>
        <h1 className="text-xl font-extrabold">ORTFOLIO</h1>
      </div>

      <ul className="hidden md:flex gap-6 font-medium text-sm uppercase tracking-wide">
        <li><Link href="/" className="hover:text-red-600 transition">Home</Link></li>
        <li><Link href="/about" className="hover:text-red-600 transition">About Us</Link></li>
        <li><Link href="/services" className="hover:text-red-600 transition">Services</Link></li>
        <li><Link href="/work" className="hover:text-red-600 transition">Projects</Link></li>
        <li><Link href="/testimonials" className="hover:text-red-600 transition">Testimonials</Link></li>
        <li><Link href="/blog" className="hover:text-red-600 transition">Blog</Link></li>
        <li><Link href="/contact" className="hover:text-red-600 transition">Contact</Link></li>
      </ul>

      <Link
        href="/cv.pdf"
        className="hidden md:inline-block bg-red-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-700 transition text-sm"
      >
        DOWNLOAD MY CV ↓
      </Link>
    </nav>
  )
}