export type ProductType = {
    id: number
    name: string
    description: string
    price: string
    image_id: number
    in_stock: number
  }
  
  export const fetchProducts = async () => {
    const products: ProductType[] = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`).then(res => res.json());
    return products
  }
  
  export const fetchProduct = async (id: string) => {
    const product: ProductType[] = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`).then(res => res.json());
    return product[0]
  }