import { getProduct } from "@/controller/products";
import { ProductType } from "@/services/products";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } } ) {
    const product = await getProduct(params.id);

    return NextResponse.json(product) as NextResponse<ProductType>;
}