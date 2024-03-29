import { Metadata } from "next";
import ProductDetails from "./ProductDetails";
import { getProduct } from "@/controller/products";


export async function generateMetadata ( { params }: { params: { id: string }} ): Promise<Metadata> {
    const product = await getProduct(params.id);

    return {
        title: product.name,
        description: `${product.name} details`
    }
}

export default async function Product( { params }: { params: { id: string } }) {
    const product = await getProduct(params.id);

    return (
        <div>
            <ProductDetails product={product!} />
        </div>
    )
}