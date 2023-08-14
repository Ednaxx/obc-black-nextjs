import ProductsList from "@/app/products/ProductsList";
import { getProducts } from "@/pages/api/products";
import { ProductType } from "@/services/products";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Our Products',
    description: 'Explore our products!'
}

export async function getStaticProps(): Promise<ProductType[]> {
    return await getProducts();
}

export default async function Products() {
    const products = await getProducts();
    return (
        <>
            <main>
                    {<ProductsList products={products!} />}
            </main>
        </>
    )
}