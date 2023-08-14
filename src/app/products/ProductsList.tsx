"use client";

import React from "react"
import { Col, Container, Row } from "reactstrap"
import ProductCard from "./ProductCard"
import styles from "./productsList.module.css"
import { ProductType } from "@/services/products";

export default function ProductsList({ products }: { products: ProductType[] }) {

  return (
      <Container className="mb-5">
        <h1 className="my-5">
          Our Products
        </h1>
        <Row className="g-5">
          {products.map(product => (
            <Col md={6} lg={4} xl={3} key={product.id}>
              <ProductCard product={product} className={styles.productCard} />
            </Col>
          ))}
        </Row>
      </Container>
  )
}