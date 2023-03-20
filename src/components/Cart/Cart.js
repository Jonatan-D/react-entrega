import {BsFillTrash3Fill} from "react-icons/bs";
import {useContext} from "react";
import {CartContext} from "../../Context/CartContext";
import "./Cart.scss";

export const Cart = () => {
	const {cart, totalCompra, vaciarCarrito, quitarDelCarrito} = useContext(CartContext);
	console.log(cart);
	return (
		<div className="container my-5">
			<h2>Tu compra</h2>
			<hr />

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

					<hr />
				</div>
			))}

			<h3>Total de la compra: USD {totalCompra().toFixed(2)}</h3>

			{cart.length != 0 && (
				<button onClick={vaciarCarrito} className="btn btn-warning">
					Vaciar carrito
				</button>
			)}
		</div>
	);
};
