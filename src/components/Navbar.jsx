'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaTelegramPlane, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../public/maf.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);



  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Me' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

      const toggleDarkMode = () => {
      setIsDarkMode((prev) => !prev);
      document.documentElement.classList.toggle('dark', !isDarkMode);
    };

  return (
    <nav className="w-[95%] ml-10 fixed top-10 z-50 flex justify-between items-center py-3 px-6 md:px-10 bg-white text-gray-900 border border-gray-300 rounded-full shadow-inner backdrop-blur-md">
      {/* Logo */}
      <div className="flex items-center gap-2 mx-4">
        <Image src={logo} alt="Logo" width={70} height={70} className="object-contain" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 font-medium text-sm uppercase tracking-wide">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-[#C33235] transition">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop Telegram Button */}
      <div className="hidden md:flex items-center mx-4 gap-2">
        <Link
          href="https://t.me/mafi124679"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#C33235] text-white px-5 py-2 rounded-full font-semibold hover:bg-red-600 transition text-sm"
        >
          <FaTelegramPlane className="text-lg" />
          Let's Talk
        </Link>
         <button
          onClick={toggleDarkMode}
          className="w-10 h-10  flex items-center justify-center rounded-full border dark:bg-gray-800 text-gray-800 dark:text-white hover:scale-105 transition"
          title="Toggle Dark Mode"
        >
          {isDarkMode ? '🌙' : '☀️'}
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl text-[#C33235]">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-20 right-6 w-60 bg-white rounded-lg shadow-lg py-4 px-6 z-50 flex flex-col gap-4 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="hover:text-[#C33235] transition"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://t.me/mafi124679"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#C33235] text-white py-2 rounded-full font-semibold hover:bg-red-600 transition"
          >
            <FaTelegramPlane />
            Let's Talk
          </Link>
        </div>
      )}
    </nav>
  );
}
