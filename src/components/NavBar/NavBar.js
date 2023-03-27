import logo from "./logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {CartWidget} from "../CartWidget/CartWidget";
import {Dolar} from "../Dolar/Dolar";
import {Link} from "react-router-dom";
import "./NavBar.scss";
import {useContext} from "react";
import {LoginContext} from "../../Context/LoginContext";

//Navbar con Bootstrap y a su vez, combinado con Route as={Link}
export function NavBar() {
	return (
		<>
			<Navbar bg="dark" variant="dark border-bottom border-5 border-warning ">
				<Container fluid>
					<img src={logo} alt="logo" className=" header__logo rounded my-2 m-1"></img>
					<Nav className="me-auto nav">
						<Nav.Link as={Link} className="navLink" to="/">
							INICIO
						</Nav.Link>
						<Nav.Link as={Link} className="navLink" to="/productos/bicicletas">
							BICICLETAS
						</Nav.Link>

						<Nav.Link as={Link} className="navLink" to="/productos/repuestos">
							REPUESTOS
						</Nav.Link>
						<Nav.Link as={Link} className="navLink" to="/productos/accesorios">
							ACCESORIOS
						</Nav.Link>
						<Nav.Link className="navLink" to="#dolar">
							<Dolar />
						</Nav.Link>
					</Nav>
				</Container>
				<CartWidget />
			</Navbar>
		</>
	);
}
