import "./CartWidget.scss";
import {Link} from "react-router-dom";
import {MdShoppingCart} from "react-icons/md";
import {useContext} from "react";
import {CartContext} from "../../Context/CartContext";

export const CartWidget = () => {
	const {cantProductosCarrito, cart} = useContext(CartContext);
	console.log(cantProductosCarrito);
	return (
		<div className="cartwidget__container text-center me-4">
			<Link to="/cart" className="cartwidget__container">
				<MdShoppingCart className="cartwidget--container__cart" />
				{cart.length > 0 && <div className="container__cantidad">{cantProductosCarrito()}</div>}
			</Link>
		</div>
	);
};
