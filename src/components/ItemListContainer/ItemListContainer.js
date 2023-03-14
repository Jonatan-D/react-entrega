import {useEffect, useState} from "react";
import {pedirDatos} from "../../helpers/pedirDatos";
import {ItemList} from "../ItemList/ItemList";
import {Loading} from "../Loading/loading";
import {useParams} from "react-router-dom";

export const ItemListContainer = () => {
	const [productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(true);

	const {categoryId} = useParams();

	useEffect(() => {
		setLoading(true);

		pedirDatos()
			.then((response) => {
				if (!categoryId) {
					setProductos(response);
				} else {
					setProductos(response.filter((prod) => prod.category === categoryId));
				}
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [categoryId]);

	return (
		<div className="container d-flex justify-content-center">
			{loading ? <Loading /> : <ItemList items={productos} />}
		</div>
	);
};
