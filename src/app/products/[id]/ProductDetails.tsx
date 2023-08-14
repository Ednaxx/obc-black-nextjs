"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { ProductType } from "../../../services/products";
import SuccessToast from "../../SuccessToast";
import { useCart } from "@/app/useCart";

type ProductDetailsProps = {
    product: ProductType
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const [toastIsOpen, setToastIsOpen] = useState(false);
    const { addProduct } = useCart();

    return (
        <Container className="mt-5">
            <Row>
                <Col lg={6}>
                    <Image
                        src={`/prod/${product.image_id}.jpg`}
                        alt={product.name}
                        height={500}
                        width={600}
                    />
                </Col>

                <Col lg={6}>
                    <h1>{product.name}</h1>

                    <h2 className="text-muted">
                        {(Number(product.price) / 100).toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}
                    </h2>

                    <p className="my-3">
                        <span className="d-block font-weight-bold">Description:</span>
                        {product.description}
                    </p>

                    <p className="text-muted">In Stock: {product.in_stock}</p>

                    <Button
                        color="dark"
                        className="my-3 pb-2"
                        onClick={() => {
                            addProduct(product);
                            setToastIsOpen(true);
                            setTimeout(() => setToastIsOpen(false), 1000 * 3);
                        }}
                    >
                        Buy now
                    </Button>

                    <SuccessToast toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen} />
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetails