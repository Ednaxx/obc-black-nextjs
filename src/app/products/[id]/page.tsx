import { Metadata } from "next";
import ProductDetails from "./ProductDetails";
import { getProduct } from "@/pages/api/products/[id]";


export async function generateMetadata ( { params }: { params: { id: string }} ): Promise<Metadata> {
    const product = await getProduct(Number(params.id));

    return {
        title: product.name,
        description: `${product.name} details`
    }
}

export default async function Product( { params }: { params: { id: string } }) {
    const product = await getProduct(Number(params.id));

    return (
        <div>
            <ProductDetails product={product!} />
        </div>
    )
}