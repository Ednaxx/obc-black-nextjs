import { getProducts } from "@/controller/products";
import { ProductType } from "@/services/products";
import { NextResponse } from "next/server";

export async function GET() {
    const products = await getProducts();

    return NextResponse.json(products) as NextResponse<ProductType[]>;
}