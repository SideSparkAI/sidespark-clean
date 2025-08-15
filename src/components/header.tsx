// src/components/Header.tsx

"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Set the initial theme based on the class on the html element
    const root = document.documentElement;
    if (root.classList.contains('dark')) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <header className="bg-gray-100 dark:bg-[#1A1A1A] border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-3">
        <Link href="/" className="flex items-center gap-3 text-black dark:text-white">
          <img src="/logo.png" alt="SideSpark AI Logo" className="h-10 w-10" />
          <span className="font-bold text-xl">SideSpark AI ⚡</span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/about" className="text-sm font-semibold hover:text-[#4a42ff]">About</Link>
            <Link href="/pricing" className="text-sm font-semibold hover:text-[#4a42ff]">Pricing</Link>
            <Link href="/contact" className="text-sm font-semibold hover:text-[#4a42ff]">Contact</Link>
          </nav>
          <button onClick={toggleTheme} className="bg-gray-200 dark:bg-gray-700 text-lg p-2 rounded-md" aria-label="Toggle theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
}