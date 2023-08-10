import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
    api: {
        responseLimit: false,
    },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const client = await db.connect();
        const { rows } = await client.sql`SELECT products.id, products.name, products.description, products.price, products.in_stock, images.image FROM products INNER JOIN images ON products.image_id=images.id`
        console.log(rows)
        res.status(200).json(rows);
    }
    catch (error) {
        res.status(500).send(error);
        console.log(error);
    }

}