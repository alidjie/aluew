import { getProductBySlug } from '@/lib/api';
import ProductGallery from './components/ProductGallery';
import ProductInfo from './components/ProductInfo';
import ProductSpecs from './components/ProductSpecs';
import InquiryForm from './components/InquiryForm';
import { Metadata } from 'next';

export async function generateMetadata({ params }): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  return {
    title: `${product.name} | Taizhou Youjiu Trading`,
    description: product.description.slice(0, 160),
    keywords: product.keywords.join(', '),
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [{ url: product.mainImage }],
    },
    twitter: {
      card: 'summary_large_image',
      images: [product.mainImage],
    },
  };
}

export default async function ProductPage({ params }) {
  const product = await getProductBySlug(params.slug);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* 图片展示区 */}
        <ProductGallery 
          mainImage={product.mainImage} 
          gallery={product.gallery} // 最多5张附图
        />
        
        {/* 产品信息区 */}
        <div>
          <ProductInfo 
            name={product.name}
            price={product.price}
            description={product.description}
          />
          
          {/* 产品参数表格 */}
          <ProductSpecs specs={product.specs} />
          
          {/* 询盘表单 */}
          <InquiryForm productName={product.name} />
        </div>
      </div>
    </div>
  );
}