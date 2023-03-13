import {useEffect, useState} from "react";
import {pedirDatos} from "../../helpers/pedirDatos";
import {ItemList} from "../ItemList/ItemList";
import {Loading} from "../Loading/loading";

export const ItemListContainer = () => {
	const [productos, setProductos] = useState([]);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		pedirDatos()
			.then((response) => {
				setProductos(response);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<div className="container d-flex justify-content-center">
			{loading ? <Loading /> : <ItemList items={productos} />}
		</div>
	);
};
