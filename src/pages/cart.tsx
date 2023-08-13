// pages/cart.tsx

import CartTable from "@/components/CartTable";
import CartTotal from "@/components/CartTotal";
import Header from "@/components/Header";
import { NextPage } from "next";
import Head from "next/head";
import { Container } from "reactstrap";

const Cart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cart</title>
        <meta name="description" content="My shopping cart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

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

export default Cart