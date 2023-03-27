import {useContext, useState} from "react";
import {Button} from "react-bootstrap";
import {Navigate} from "react-router-dom";
import {CartContext} from "../../Context/CartContext";
import {Separador} from "../Separador/Separador";

export const Checkout = () => {
	const {cart, totalCompra} = useContext(CartContext);

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
		console.log("submit", orden);
	};

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
