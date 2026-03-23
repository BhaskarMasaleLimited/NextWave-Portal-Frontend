import { products, getProductBySlug, getRelatedProducts } from "@/lib/products";
import ProductDetailClient from "./ProductDetailClient";

// Generate static params for all products
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return { title: "Product Not Found — Bhaskar Foods" };
  }
  return {
    title: `${product.name} — Bhaskar Foods`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(slug, 4) : [];

  return <ProductDetailClient product={product || null} related={related} />;
}
