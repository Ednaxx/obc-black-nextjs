import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "reactstrap";
import { useCart } from "../hooks/useCart";
import { ProductType } from "../services/products";

type CartEntry = {
  product: ProductType
  quantity: number
}

const CartTableRow = (props: {
  entry: CartEntry
}) => {
  const { addProduct, removeProduct } = useCart()

  return (
    <tr>
      <td>
        <Row className="align-items-center">
          <Col xs={4} md={2} lg={1}>
            <Image
              src={`/prod/${props.entry.product.image_id}.jpg`}
              alt={props.entry.product.name}
              style={{width: "100%", height: "100%"}}
              height={500}
              width={600}
            />
          </Col>
          <Col xs={8} md={10} lg={11}>
            {props.entry.product.name}
          </Col>
        </Row>
      </td>
      <td>R$ {props.entry.product.price}</td>
      <td>{props.entry.quantity}</td>
      <td>{(Number(props.entry.product.price) / 100 * props.entry.quantity).toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</td>
      <td>
        <Button
          color="primary"
          size="sm"
          onClick={() => addProduct(props.entry.product)}
        >
          +
        </Button>
        {' '}
        <Button
          color="danger"
          size="sm"
          onClick={() => removeProduct(props.entry.product.id)}
        >
          –
        </Button>
      </td>
    </tr>
  )
}

export default function CartTable() {
    const [cartEntries, setCartEntries] = useState<CartEntry[]>([])
    const { cart } = useCart()
  
    useEffect(() => {
      const entriesList = cart.reduce((list, product) => {
        const entryIndex = list.findIndex(entry => entry.product.id === product.id)
  
        if (entryIndex === -1) {
          return [
            ...list,
            {
              product,
              quantity: 1
            }
          ]
        }
  
        list[entryIndex].quantity++
        return list
  
      }, [] as CartEntry[])
  
      entriesList.sort((a, b) => a.product.id - b.product.id)
      setCartEntries(entriesList)
  
    }, [cart])
  
    return (
      <Table responsive className="align-middle" style={{ minWidth: '32rem' }}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Amt.</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
                  {cartEntries.map(entry => <CartTableRow key={entry.product.id} entry={entry} />)}
        </tbody>
      </Table>
    )
  }