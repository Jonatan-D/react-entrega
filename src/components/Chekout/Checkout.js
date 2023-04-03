import {useContext, useState} from "react";
import {Button} from "react-bootstrap";
import {Navigate, Link} from "react-router-dom";
import {CartContext} from "../../Context/CartContext";
import {Separador} from "../Separador/Separador";
import {db} from "../../firebase/config";
import {Formik} from "formik";
import * as Yup from "yup";
import {documentId, collection, query, where, addDoc, writeBatch, getDocs} from "firebase/firestore";

// validacion del formulario con Yup
const validacionForm = Yup.object().shape({
	nombre: Yup.string()
		.required("Campo obligatorio")
		.min(3, "Nombre demasiado corto")
		.max(20, "Maximo 20 caracteres"),
	direccion: Yup.string()
		.required("Campo obligatorio")
		.min(15, "Minimo 15 caracteres")
		.max(50, "Maximo 50 caracteres"),
	email: Yup.string().required("Campo obligatorio").email("Email inválido"),
});

export const Checkout = () => {
	const {cart, totalCompra, vaciarCarrito} = useContext(CartContext);
	const [orderId, setOrderId] = useState(null);

	const generarOrden = async (values) => {
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

		const batch = writeBatch(db);

		const orderRef = collection(db, "orders");
		const productosRef = collection(db, "productos");

		const fueraDeStock = [];

		const referenciaItem = query(
			productosRef,
			where(
				documentId(),
				"in",
				cart.map((prod) => prod.id)
			)
		);

		const response = await getDocs(referenciaItem);

		getDocs(referenciaItem);

		response.docs.forEach((doc) => {
			const item = cart.find((prod) => prod.id === doc.id);

			if (doc.data().stock >= item.cantidad) {
				batch.update(doc.ref, {
					stock: doc.data().stock - item.cantidad,
				});
			} else {
				fueraDeStock.push(item);
			}
		});

		if (fueraDeStock.length === 0) {
			await batch.commit();
		} else {
			alert("hay items sin stock");
		}

		addDoc(orderRef, orden).then((doc) => {
			setOrderId(doc.id);
			vaciarCarrito();
		});
	};

	// condicion que muestra que se registro la orden

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

			<Formik
				initialValues={{
					nombre: "",
					direccion: "",
					email: "",
				}}
				validationSchema={validacionForm}
				onSubmit={generarOrden}>
				{({values, handleChange, handleSubmit, isSubmitting, errors}) => (
					<form onSubmit={handleSubmit}>
						<input
							onChange={handleChange}
							value={values.nombre}
							type={"text"}
							placeholder="Nombre"
							className="form-control my-3"
							name="nombre"
						/>
						{errors.nombre && <p className="alert alert-warning">{errors.nombre}</p>}

						<input
							onChange={handleChange}
							value={values.direccion}
							type={"text"}
							placeholder="Dirección"
							className="form-control my-3"
							name="direccion"
						/>
						{errors.direccion && <p className="alert alert-warning">{errors.direccion}</p>}
						<input
							onChange={handleChange}
							value={values.email}
							type={"email"}
							placeholder="Email"
							className="form-control my-3"
							name="email"
						/>
						{errors.email && <p className="alert alert-warning">{errors.email}</p>}
						<Button variant="primary" type="submit" disabled={isSubmitting}>
							Enviar
						</Button>
					</form>
				)}
			</Formik>
		</div>
	);
};
