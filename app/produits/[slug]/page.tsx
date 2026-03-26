import { products } from "../../productsData";
import ProductDetailPage from "../../ProductDetail";

export function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}


export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  
  
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

 
  return <ProductDetailPage initialProductSlug={slug} />;
}