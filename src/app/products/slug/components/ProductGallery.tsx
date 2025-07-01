// app/products/[slug]/components/ProductGallery.tsx
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { SwipeDirection, useSwipeable } from 'react-swipeable';

interface ProductGalleryProps {
  mainImage: string;
  gallery: string[]; // 最多5张附图
}

export default function ProductGallery({ mainImage, gallery = [] }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const images = [mainImage, ...gallery.slice(0, 5)]; // 确保最多6张图（1主+5附）

  // 自动轮播逻辑（5秒切换）
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev >= images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // 触摸手势支持（移动端滑动切换）
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => 
      setSelectedIndex((prev) => Math.min(prev + 1, images.length - 1)),
    onSwipedRight: () => 
      setSelectedIndex((prev) => Math.max(prev - 1, 0)),
    trackMouse: true
  });

  return (
    <div className="flex flex-col gap-4">
      {/* 主图展示区 */}
      <div 
        {...swipeHandlers}
        className="relative aspect-square w-full bg-gray-100 rounded-lg overflow-hidden"
      >
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === selectedIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={img}
              alt={`产品图 ${index + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index === 0}
            />
          </div>
        ))}

        {/* 导航按钮 */}
        <button
          onClick={() => setSelectedIndex(prev => Math.max(prev - 1, 0))}
          className="absolute left-2 top-1/2 z-20 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
          aria-label="上一张"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setSelectedIndex(prev => Math.min(prev + 1, images.length - 1))}
          className="absolute right-2 top-1/2 z-20 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
          aria-label="下一张"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* 图片指示器 */}
        <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === selectedIndex ? 'bg-blue-600 scale-125' : 'bg-gray-400'
              }`}
              aria-label={`查看图片 ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 缩略图导航 */}
      <div className="flex gap-2 overflow-x-auto py-2 scrollbar-hide">
        {images.map((img, index) => (
          <button
            key={img}
            onClick={() => setSelectedIndex(index)}
            className={`flex-shrink-0 w-16 h-16 border-2 rounded-md overflow-hidden transition-all ${
              index === selectedIndex ? 'border-blue-500 scale-110' : 'border-transparent'
            }`}
          >
            <Image
              src={img}
              alt={`缩略图 ${index + 1}`}
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
}