import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>

        <nav>
          <Link href={"/"} >Start</Link>
          <Link href={"/products"} >Products</Link>
          <Link href={"/cart"} >Cart</Link>
        </nav>

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
