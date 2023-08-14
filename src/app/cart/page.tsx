"use client";

import { Metadata } from "next"
import { Container } from "reactstrap"
import CartTable from "./CartTable"
import CartTotal from "./CartTotal"

export const metadata: Metadata = {
    title: 'Cart',
    description: 'Finish your shopping'
}

export default function Cart() {
    return (
        <>
            <main>
                <Container className="mb-5">
                    <h1 className="my-5">
                        Cart
                    </h1>

                    <CartTable />
                    <CartTotal />
                </Container>
            </main>
        </>
    )
}