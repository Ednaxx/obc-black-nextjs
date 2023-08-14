"use client";

import { CartContextProvider } from "./useCart";

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <CartContextProvider>
            {children}
        </CartContextProvider>
    );
}