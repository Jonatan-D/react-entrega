import {BsFillTrash3Fill} from "react-icons/bs";
import {useContext} from "react";
import {CartContext} from "../../Context/CartContext";
import "./Cart.scss";
import {Link} from "react-router-dom";
import {Separador} from "../Separador/Separador";
import {Button} from "react-bootstrap";

export const Cart = () => {
	const {cart, totalCompra, vaciarCarrito, quitarDelCarrito, cantProductosCarrito} =
		useContext(CartContext);
	return (
		<div className="container my-5">
			{/* muestra la cantidad de productos que tiene el carrito y el total del mismo */}
			<div>
				<h4>Tu compra ({cantProductosCarrito()})</h4>
				<h6>Total: USD {totalCompra().toFixed(2)}</h6>

				{/*Si el carrito tiene algún producto, se muestra un boton para poder vaciarlo completamente*/}

				{cart.length !== 0 && (
					<div>
						<button onClick={vaciarCarrito} className="btn btn-warning">
							Vaciar carrito
						</button>
					</div>
				)}

				{/*si el carrito esta vacio,esta condición lo informa informa y muestra boton para invitar
				 al cliente a que elija productos, de lo contrario muestra boton para terminar compra */}
				<div>
					{cart.length === 0 ? (
						<div>
							<h4 className="">Tu carrito está vacío</h4>
							<Button as={Link} to={"/"} variant="primary">
								Elegir productos
							</Button>
						</div>
					) : (
						<div className="my-3">
							<Button as={Link} to={"/checkout"} variant="success ">
								Terminar de comprar
							</Button>
						</div>
					)}{" "}
				</div>
			</div>

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
		</div>
	);
};
