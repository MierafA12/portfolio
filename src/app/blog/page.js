'use client';

import { motion } from 'framer-motion';

export default function Blog() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f9f8fe] to-[#f1eef9] text-gray-800 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="bg-white shadow-lg rounded-xl p-8 text-center max-w-md w-full border border-[#C33235]"
      >
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-[#C33235] mb-4"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        >
          Coming Soon 🚧
        </motion.h1>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Our blog page is under construction. We’re cooking up something exciting for you!
        </p>
        <a
          href="/"
          className="inline-block px-5 py-2 bg-[#C33235] text-white text-sm sm:text-base rounded-lg shadow-md hover:bg-[#a8282b] transition-colors"
        >
          Back to Home
        </a>
      </motion.div>
    </main>
  );
}
