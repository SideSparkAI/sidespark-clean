// src/components/Footer.tsx

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-[#111] text-gray-500 border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center gap-6 mb-4">
            <a href="https://tiktok.com/@sidespark.ai" target="_blank" rel="noopener noreferrer"><img src="/assets/tiktok.png" alt="TikTok" className="h-6 w-6 opacity-60 hover:opacity-100" /></a>
            <a href="https://youtube.com/@SideSparkAI" target="_blank" rel="noopener noreferrer"><img src="/assets/youtube.png" alt="YouTube" className="h-6 w-6 opacity-60 hover:opacity-100" /></a>
            <a href="https://instagram.com/@sidespark.ai" target="_blank" rel="noopener noreferrer"><img src="/assets/instagram.png" alt="Instagram" className="h-6 w-6 opacity-60 hover:opacity-100" /></a>
            <a href="https://facebook.com/sidesparkai" target="_blank" rel="noopener noreferrer"><img src="/assets/facebook.png" alt="Facebook" className="h-6 w-6 opacity-60 hover:opacity-100" /></a>
        </div>
        <div className="text-xs space-x-4 my-4">
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/refund" className="hover:text-white">Refund Policy</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>
        <p className="text-xs">© 2025 SideSpark.ai. All Rights Reserved.</p>
        <p className="text-xs mt-2">Powered by <a href="https://cashflowunplugged.com" className="hover:text-white" target="_blank" rel="noopener noreferrer">CashflowUnplugged.com</a> ⚡</p>
      </div>
    </footer>
  );
}