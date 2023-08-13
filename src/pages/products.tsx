// pages/products.tsx

import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { ReactNode } from 'react'
import { Container } from 'reactstrap'
import Header from '../components/Header'
import ProductsList from '../components/ProductsList'
import { ProductType } from '../services/products'
import { getProducts } from './api/products'

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProducts();

  return { props: { products } }
}

const Products: NextPage = (props: {
  children?: ReactNode
  products?: ProductType[]
}) => {
  return (
    <>
      <Head>
        <title>Our Products</title>
        <meta name="description" content="Explore our products!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Container className="mb-5">
          <h1 className="my-5">
            Our Products
          </h1>

          {<ProductsList products={props.products!} />}
        </Container>
      </main>
    </>
  )
}

export default Products