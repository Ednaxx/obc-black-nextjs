import ProductsList from "@/app/products/ProductsList";
import { getProducts } from "@/controller/products";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Our Products',
    description: 'Explore our products!'
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