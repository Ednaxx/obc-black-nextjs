import { ProductType } from "@/services/products";
import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    try {
        const product = await getProduct(Number(id))

        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}

export async function getProduct(id: Number) {
    const client = await db.connect();
    const { rows } = await client.sql`SELECT * FROM products WHERE products.id=${Number(id)}`;

    return rows[0] as ProductType;
}