"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaFacebook, FaLinkedin, FaWhatsapp, FaWeixin } from 'react-icons/fa';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* 顶部导航栏 */}
      <nav className="flex justify-between items-center px-6 py-4 shadow bg-black text-white">
        {/* Logo + 公司名称 */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-10" />
          <span className="text-xl font-bold">Taizhou Youjiu Trading Co., Ltd.</span>
        </div>

        {/* 主菜单 */}
        <ul className="flex space-x-6 text-lg font-semibold">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              Products ▼
            </button>
            {menuOpen && (
              <ul className="absolute top-full mt-2 left-0 w-64 bg-white text-black shadow-lg rounded p-2 z-50 space-y-2">
                <li><Link href="/products/magnetic-materials" className="block px-4 py-2 hover:bg-gray-100">Magnetic Materials</Link></li>
                <li><Link href="/products/magnetic-filters" className="block px-4 py-2 hover:bg-gray-100">Magnetic Filters</Link></li>
                <li><Link href="/products/enamelled-wire" className="block px-4 py-2 hover:bg-gray-100">Enameled Wire</Link></li>
                <li><Link href="/products/electric-motorcycle" className="block px-4 py-2 hover:bg-gray-100">Electric Motorcycle</Link></li>
                <li><Link href="/products/agricultural-machinery" className="block px-4 py-2 hover:bg-gray-100">Agricultural Machinery</Link></li>
              </ul>
            )}
          </li>
          <li><Link href="/inquiry">Inquiry</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        {/* 社交图标 */}
        <div className="flex space-x-4 text-xl">
          <a href="#" className="hover:text-orange-500"><FaLinkedin /></a>
          <a href="#" className="hover:text-orange-500"><FaFacebook /></a>
          <a href="#" className="hover:text-orange-500"><FaWhatsapp /></a>
          <a href="#" className="hover:text-orange-500"><FaWeixin /></a>
        </div>
      </nav>

      {/* 欢迎语 */}
      <section className="text-center mt-16">
        <h1 className="text-5xl font-bold mb-4 text-black">Welcome to Taizhou Youjiu</h1>
        <p className="text-lg mb-6 text-gray-600">Professional Supplier of Magnetic Materials, Enameled Wire, Electric Motorcycle & More</p>
        <Link href="/products" className="bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700">Explore Products</Link>
      </section>

      {/* 页脚 */}
      <footer className="mt-24 p-6 text-center text-sm text-gray-400 border-t">© 2025 Taizhou Youjiu Trading Co., Ltd. All rights reserved.</footer>
    </main>
  );
}
