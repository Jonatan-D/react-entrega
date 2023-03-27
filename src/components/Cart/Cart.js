import {BsFillTrash3Fill} from "react-icons/bs";
import {useContext} from "react";
import {CartContext} from "../../Context/CartContext";
import "./Cart.scss";
import {Link} from "react-router-dom";
import {Separador} from "../Separador/Separador";
import {Button} from "react-bootstrap";

export const Cart = () => {
	const {cart, totalCompra, vaciarCarrito, quitarDelCarrito} = useContext(CartContext);
	console.log(cart);
	return (
		<div className="container my-5">
			<h2>Tu compra ({cart.length})</h2>
			<h6>Total: USD {totalCompra().toFixed(2)}</h6>
			<Separador />
			{cart.map((prod) => (
				<div className="compra text-right" key={prod.id}>
					<h4>{prod.name}</h4>
					<img className="compra__img" src={prod.img} alt={prod.name} />
					<p>Precio: USD {prod.price * prod.cantidad}</p>
					<small>
						Cantidad: <b>{prod.cantidad}</b>
					</small>
					<button onClick={() => quitarDelCarrito(prod.id)} className="btn btn-danger mx-2 ">
						<BsFillTrash3Fill />
					</button>

					<Separador />
				</div>
			))}

			{cart.length != 0 && (
				<div>
					<button onClick={vaciarCarrito} className="btn btn-warning">
						Vaciar carrito
					</button>
				</div>
			)}
			{cart.length == 0 ? (
				<div>
					<h4 className="">Tu carrito está vacío</h4>
					<Button as={Link} to={"/"} variant="primary">
						Elegir productos
					</Button>
				</div>
			) : (
				<Button as={Link} to={"/checkout"} variant="success">
					Terminar de comprar
				</Button>
			)}
		</div>
	);
};
