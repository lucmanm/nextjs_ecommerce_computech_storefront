import { env } from "@/env";

// fetch product
export async function getProduct(locale: string, product: string) {
  const res = await fetch(`${env.NEXT_DEV_API_URL}/${locale}/${product}`);
  if (!res.ok) throw new Error("FAIL_FETCH_GET_PRODUCT");
  const data = await res.json();
  return data.product;
}

// fetch all products
export async function getProducts(locale: string,categoryName: string) {
  const res = await fetch(`${env.NEXT_DEV_API_URL}/${locale}/products?category=${categoryName}`);
  if (!res.ok) throw new Error("FAIL_FETCH_GET_PRODUCTS");
  const data = await res.json();
  return data.products;
}

// fetch all product by category

export async function getProductsByCategoryOrBrand(
  locale: string,
  ProductsByCategoryOrBrand: string,
) {
  const res = await fetch(
    `${env.NEXT_DEV_API_URL}/${locale}/product/${ProductsByCategoryOrBrand}`,
  );
  if (!res.ok) throw new Error("FAIL_FETCH_GET_PRODUCTS_BY_CATEGORY");
  const data = await res.json();
  return data.result;
}
