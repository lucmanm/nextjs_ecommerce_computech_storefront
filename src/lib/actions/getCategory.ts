
export async function getProductCategory(locale: string) {
  
  const res = await fetch(`${process.env.NEXT_DEV_API_URL}/${locale}/category`);
  if (!res.ok) throw new Error("FAIL_FETCH_GET_CATEGORY");
  const data = await res.json();
  return data
}

export async function getProductByCategoryId(categoryId: string) {
  const res = await fetch(`${process.env.NEXT_DEV_API_URL}/category/${categoryId}`, { next: { revalidate: 0 } });
  return res.json();
}


export async function getProducts(locale: string) {
  
  const res = await fetch(`${process.env.NEXT_DEV_API_URL}/${locale}/products`);
  if (!res.ok) throw new Error("FAIL_FETCH_GET_PRODUCTS");
  const data = await res.json();
  return data.products
}