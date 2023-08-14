"use client";

import { Container } from "reactstrap";
import CartTable from "./CartTable";
import CartTotal from "./CartTotal";

export default function CartFrame() {
    return (
        <>
            <Container className="mb-5">
                <h1 className="my-5">
                    Cart
                </h1>

                <CartTable />
                <CartTotal />
            </Container>
        </>
    )
}