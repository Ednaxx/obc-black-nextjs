import { Metadata } from "next"
import CartFrame from "./CartFrame"

export const metadata: Metadata = {
    title: 'Cart',
    description: 'Finish your shopping'
}

export default function Cart() {
    return (
        <>
            <main>
                <CartFrame />
            </main>
        </>
    )
}