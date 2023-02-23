import carrito from "./iconcart.png";
import "./CartWidget.scss";

export const CartWidget = () => {
	return (
		<div className="cartwidget__container">
			<p className="container__cantidad">0</p>
			<img src={carrito} alt="carrito" className="img__cart" />
		</div>
	);
};
