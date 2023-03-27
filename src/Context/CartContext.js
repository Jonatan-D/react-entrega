import {createContext, useEffect, useState} from "react";

export const CartContext = createContext();

// iniciar el carrito con la info del localStorage
const inicioCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {
	const [cart, setCart] = useState(inicioCarrito);

	const agregarAlCarrito = (item) => {
		setCart([...cart, item]);
	};

	//funcion para saber si el producto ya esta en el carrito, devuelve true o false
	const isInCart = (id) => {
		return cart.some((prod) => prod.id === id);
	};

	//funcion que retorna la cantidad de productos del carrito
	const cantProductosCarrito = () => {
		return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
	};

	const totalCompra = () => {
		return cart.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0);
	};
	const vaciarCarrito = () => {
		setCart([]);
	};
	const quitarDelCarrito = (id) => {
		setCart(cart.filter((prod) => prod.id !== id));

		//ver despues como hacer para eliminar solo una cantidad de un producto

		/* let posicionItem = 0;
		 for (let i = 0; i < cart.length; i++) {
		 	if (cart[i].id == id) {
		 		posicionItem = i;
		 		break;
		 	}
		 }

		 setCart(cart[posicionItem].cantidad);
		 cantProductosCarrito();
		 console.log(cart[posicionItem].cantidad);

		 console.log(); */
	};

	useEffect(() => {
		localStorage.setItem("carrito", JSON.stringify(cart));
	}, [cart]);

	return (
		<CartContext.Provider
			value={{
				cart,
				agregarAlCarrito,
				isInCart,
				cantProductosCarrito,
				totalCompra,
				vaciarCarrito,
				quitarDelCarrito,
			}}>
			{children}
		</CartContext.Provider>
	);
};
