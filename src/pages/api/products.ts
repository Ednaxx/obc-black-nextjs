import { ProductType } from "@/services/products";
import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const products = getProducts()
        
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).send(error);
        console.log(error);
    }

}

export async function getProducts() {
    const client = await db.connect();
    const { rows } = await client.sql`SELECT * FROM products`;

    return rows as ProductType[];
}