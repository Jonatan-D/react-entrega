import {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {CartContext} from "../../Context/CartContext";
import {ItemCount} from "../ItemCount/ItemCount";

export const ItemDetail = ({item}) => {
	const {agregarAlCarrito, isInCart} = useContext(CartContext);

	console.log(isInCart(item.id));

	const [cantidad, setCantidad] = useState(1);

	const navigate = useNavigate();

	const handleVolver = () => {
		navigate(-1);
	};

	const handleAgregar = () => {
		const itemToCart = {
			...item,
			cantidad,
		};

		agregarAlCarrito(itemToCart);
	};

	return (
		<div className="container text-center">
			<div className="container my-5 p-5">
				<h3>{item.name}</h3>
				<img src={item.img} alt={item.img}></img>
				<p>{item.description}</p>
				<p>
					<b>Detalle: </b>
					{item.detail}
				</p>
				<p>
					<b>Precio: USD </b>
					{item.price}
				</p>

				{isInCart(item.id) ? (
					<Link to="/cart" className="btn btn-success">
						Terminar de comprar
					</Link>
				) : (
					<ItemCount
						max={item.stock}
						cantidad={cantidad}
						setCantidad={setCantidad}
						handleAgregar={handleAgregar}
					/>
				)}
				<br />
				<button as={Link} onClick={handleVolver} className="btn btn-primary my-3">
					Volver
				</button>
			</div>
		</div>
	);
};
