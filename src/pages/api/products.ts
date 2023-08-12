import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const client = await db.connect();
        const { rows } = await client.sql`SELECT * FROM products`
        
        res.status(200).json(rows);
    }
    catch (error) {
        res.status(500).send(error);
        console.log(error);
    }

}