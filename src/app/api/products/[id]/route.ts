import { ProductType } from "@/services/products";
import { db } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } } ) {
    const id = params.id;

    const client = await db.connect();
    const { rows } = await client.sql`SELECT * FROM products WHERE products.id=${Number(id)}`;

    return NextResponse.json(rows) as NextResponse<ProductType[]>;
}