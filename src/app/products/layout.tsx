'use client';
import Link from 'next/link';
import { useState } from 'react';

const categories = [
  "Magnetic Materials",
  "Magnetic Filters",
  "Enameled Wire",
  "Electric Motorcycle",
  "Agricultural Machinery"
];

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto px-4">
      {/* 分类下拉菜单 */}
      <div className="relative mb-8">
        <button 
          onMouseEnter={() => setIsOpen(true)} 
          onMouseLeave={() => setIsOpen(false)}
          className="flex items-center text-lg font-bold"
        >
          Products
          <span className="ml-2">▼</span>
        </button>
        
        {isOpen && (
          <div className="absolute z-10 bg-white shadow-lg rounded-md mt-2 w-64">
            {categories.map((cat) => (
              <Link 
                key={cat} 
                href={`/products/${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className="block px-4 py-2 hover:bg-blue-50"
              >
                {cat}
              </Link>
            ))}
          </div>
        )}
      </div>
      {children}
    </div>
  );
}