"use client";

import Link from "next/link";

export default function ErrorPage() {
    return (
        <>
            <h1>Something went wrong :(</h1>
            <Link href={"/products"}>Click here to return</Link>
        </>
    )
}