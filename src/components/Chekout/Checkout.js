import {useContext, useState} from "react";
import {Button} from "react-bootstrap";
import {Navigate, Link} from "react-router-dom";
import {CartContext} from "../../Context/CartContext";
import {Separador} from "../Separador/Separador";
import {db} from "../../firebase/config";
import {collection, addDoc, doc, updateDoc, getDoc} from "firebase/firestore";

export const Checkout = () => {
	const {cart, totalCompra, vaciarCarrito} = useContext(CartContext);
	const [orderId, setOrderId] = useState(null);

	const [values, setValues] = useState({
		nombre: " ",
		direccion: " ",
		email: " ",
	});

	const handleInputChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		//validar si o si despues ver y mejorar

		if (values.nombre.length < 3) {
			alert("nombre invalidod");
			return;
		}
		if (values.direccion.length < 3) {
			alert("dirección inválida");
			return;
		}
		if (values.email.length < 3) {
			alert("Email inválido");
			return;
		}

		const orden = {
			cliente: values,
			items: cart.map((prod) => ({
				id: prod.id,
				name: prod.name,
				price: prod.price,
				cantidad: prod.cantidad,
			})),
			total: totalCompra(),
			fecha: new Date(),
		};

		const productosRef = collection(db, "productos");

		//por cada item del carrito se arma la referencia al documento
		cart.forEach((item) => {
			const docRef = doc(productosRef, item.id);

			getDoc(docRef).then((doc) => {
				if (doc.data().stock >= item.cantidad) {
					updateDoc(docRef, {
						stock: doc.data().stock - item.cantidad,
					});
				} else {
					alert("no hay stock de " + item.name);
				}
			});
		});

		const orderRef = collection(db, "orders");

		// addDoc(orderRef, orden).then((doc) => {
		// 	setOrderId(doc.id);
		// 	vaciarCarrito();
		// });
	};

	//condidcion para renderizar numero de orden una vez que concreta la compra

	if (orderId) {
		return (
			<div className="container my-5">
				<h2> Tu orden se registro correctamente</h2>
				<Separador />
				<p>Tu numero de orden es: {orderId}</p>
				<Button as={Link} to="/" variant="primary">
					Seguir comprando
				</Button>
			</div>
		);
	}

	//condicion para no renderizar el checkout si el carrito esta vacio

	if (cart.length === 0) {
		return <Navigate to="/" />;
	}

	return (
		<div className="container my-5">
			<h2> Checkout</h2>
			<Separador />

			<form onSubmit={handleSubmit}>
				<input
					onChange={handleInputChange}
					value={values.nombre}
					type={"text"}
					placeholder="Nombre"
					className="form-control my-3"
					name="nombre"
				/>
				<input
					onChange={handleInputChange}
					value={values.direccion}
					type={"text"}
					placeholder="Dirección"
					className="form-control my-3"
					name="direccion"
				/>
				<input
					onChange={handleInputChange}
					value={values.email}
					type={"email"}
					placeholder="Email"
					className="form-control my-3"
					name="email"
				/>

				<Button variant="primary" type="submit">
					Enviar
				</Button>
			</form>
		</div>
	);
};
