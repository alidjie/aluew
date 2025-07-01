import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/lib/api'; // 产品数据获取函数

export default async function ProductsPage() {
  const products = await getProducts(); // 获取所有产品数据

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard 
          key={product.id}
          title={product.name}
          price={product.price}
          image={product.images[0]}
          category={product.category}
          slug={product.slug}
        />
      ))}
    </div>
  );
}