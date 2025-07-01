import { Suspense } from 'react';
import ProductFilters from '@/components/ProductFilters';
import ProductGrid from '@/components/ProductGrid';

export default function CategoryPage({ params }: { params: { category: string } }) {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* 侧边栏筛选 */}
      <aside className="w-full md:w-64">
        <ProductFilters category={params.category} />
        <div className="mt-6">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="w-full p-2 border rounded"
          />
        </div>
      </aside>
      
      {/* 产品网格 */}
      <main className="flex-1">
        <Suspense fallback={<div>Loading...</div>}>
          <ProductGrid category={params.category} />
        </Suspense>
      </main>
    </div>
  );
}