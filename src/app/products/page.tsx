import ProductsList from "@/app/products/ProductsList";
import { ProductType } from "@/services/products";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Our Products',
    description: 'Explore our products!'
}

export default async function Products() {

    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`).then( async (res) => await res.json());

    const products: ProductType[] = [...data];

    return (
        <>
            <main>
                    {<ProductsList products={products!} />}
            </main>
        </>
    )
}