import { Metadata } from "next";
import ProductDetails from "./ProductDetails";
import { ProductType } from "@/services/products";

async function getProduct (id: string) {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`).then( async (res) => await res.json());
    return [...data][0] as ProductType;
}


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