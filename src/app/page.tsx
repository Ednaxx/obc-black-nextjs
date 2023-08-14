"use client";

import { Metadata } from "next"
import { Button, Container } from "reactstrap"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'BLACK-NextJS',
  description: 'Explore our products!'
}

export default function Index() {
  return (
    <>
      <main >
        <Container className="py-5 text-center">
          <h1 className="mt-5 display-1">
            The best way to buy
          </h1>
          <p className="my-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae iusto voluptatem obcaecati omnis error architecto neque cum exercitationem fugiat. Vero illo autem eum nisi sapiente, odio optio accusamus cupiditate ad.
          </p>
          <Link href="/products">
            <Button color="dark" className="px-4 pb-2">
              Explore our products!
            </Button>
          </Link>
        </Container>
      </main>
    </>
  )
}