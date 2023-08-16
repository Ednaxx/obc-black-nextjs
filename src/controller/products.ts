import { ProductType } from "@/services/products";
import { db } from "@vercel/postgres";

export async function getProducts() {
    const client = await db.connect();
    const { rows } = await client.sql`SELECT * FROM products`;

    return rows as ProductType[];
}

export async function getProduct(id: string) {
    const client = await db.connect();
    const { rows } = await client.sql`SELECT * FROM products WHERE products.id=${Number(id)}`;

    return rows[0] as ProductType;
}