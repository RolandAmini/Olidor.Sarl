import { products } from "../../productsData";
import ProductDetailPage from "../../ProductDetail";

export function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

// 1. Ajoutez 'async' ici
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  
  // 2. Attendez la résolution des paramètres
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // 3. Passez le slug extrait (la ligne rouge devrait disparaître)
  return <ProductDetailPage initialProductSlug={slug} />;
}