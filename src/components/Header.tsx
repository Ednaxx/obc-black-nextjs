import Link from "next/link";
import { Nav, Navbar } from "reactstrap";

const Header = () => {
  return (
    <Navbar container="md" color="dark" dark>
      <Link className="navbar-brand" href="/" passHref>
          Start
      </Link>
      <Nav className="flex-row" navbar>
        <Link className="nav-link me-2" href="/products">
            Products
        </Link>
        <Link className="nav-link" href="/cart">
            Cart
        </Link>
      </Nav>
    </Navbar>
  )
}

export default Header