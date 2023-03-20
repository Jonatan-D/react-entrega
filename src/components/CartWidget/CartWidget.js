import "./CartWidget.scss";
import {Link} from "react-router-dom";
import {MdShoppingCart} from "react-icons/md";
import {useContext} from "react";
import {CartContext} from "../../Context/CartContext";

export const CartWidget = () => {
	const {cantProductosCarrito} = useContext(CartContext);
	return (
		<div className="cartwidget__container text-center me-4">
			<Link to="/cart">
				<MdShoppingCart className="cartwidget--container__cart" />
			</Link>
			<span className="container__cantidad">{cantProductosCarrito()}</span>
		</div>
	);
};
