"use client";

import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { Button, Card, CardBody, CardSubtitle } from "reactstrap"
import { ProductType } from "../../services/products"
import SuccessToast from "../SuccessToast"
import { useCart } from "@/app/useCart"

export default function ProductCard({ product, className }: { product: ProductType, className: string }) {
    const [toastIsOpen, setToastIsOpen] = useState(false);
    const { id, name, image_id, price } = product;
    const { addProduct } = useCart();

    return (
        <>
            <Card className={className} >
                <Link href={`/products/${id}`}>
                    <Image className="card-img-top" style={{width: '100%', height: '100%'}} src={`/prod/${image_id}.jpg`} alt={name} height={500} width={600} />
                </Link>

                <CardBody>
                    <Link href={`/products/${id}`}>
                        <h5 className="card-title" style={{ cursor: 'pointer' }}>
                            {name}
                        </h5>
                    </Link>

                    <CardSubtitle className="mb-3 text-muted" tag="h6">
                        {(Number(price) / 100).toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}
                    </CardSubtitle>

                    <Button
                        color="dark"
                        className="pb-2"
                        block
                        onClick={() => {
                            addProduct(product);
                            setToastIsOpen(true);
                            setTimeout(() => setToastIsOpen(false), 1000 * 3);
                        }}
                    >
                        Add to cart
                    </Button>

                </CardBody>
            </Card>

            <SuccessToast toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen} />
        </>
    )
}