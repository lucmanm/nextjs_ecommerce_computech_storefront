import { env } from "@/env";

// fetch product
export async function getProduct(locale: string, product: string) {
  const res = await fetch(`${env.NEXT_DEV_API_URL}/${locale}/${product}`);
  if (!res.ok) throw new Error("FAIL_FETCH_GET_PRODUCT");
  const data = await res.json();
  return data;
}

// fetch all products
export async function getProducts(locale: string) {
  const res = await fetch(`${env.NEXT_DEV_API_URL}/${locale}/products`);
  if (!res.ok) throw new Error("FAIL_FETCH_GET_PRODUCTS");
  const data = await res.json();
  return data.products;
}

// fetch all product by category

export async function getProductsByCategory(
  locale: string,
  productsByCategory: string,
) {
  const res = await fetch(
    `${env.NEXT_DEV_API_URL}/${locale}/product/${productsByCategory}`,
  );
  if (!res.ok) throw new Error("FAIL_FETCH_GET_PRODUCTS_BY_CATEGORY");
  const data = await res.json();
  return data;
}
