import {useEffect, useState} from "react";
import {ItemList} from "../ItemList/ItemList";
import {Loading} from "../Loading/loading";
import {useParams} from "react-router-dom";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../firebase/config";

export const ItemListContainer = () => {
	const [productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(true);

	const {categoryId} = useParams();

	useEffect(() => {
		setLoading(true);

		//1er paso: referencia sincrónico
		const referenciaDocumentos = collection(db, "productos");
		//hacemos una query para filtrar datos  provenientes de ReferenciaDocumentos
		// condicionamos el valor del query q, para que nunca quede undefined.
		const q = categoryId
			? query(referenciaDocumentos, where("category", "==", categoryId))
			: referenciaDocumentos;
		// 2do paso: consumimos esa referencia

		getDocs(q)
			.then((resolve) => {
				const docs = resolve.docs.map((documentos) => {
					//retorna un spread con el contenido del documento y la propiedad id de cada producto

					return {
						...documentos.data(),
						id: documentos.id,
					};
				});

				console.log(docs);
				setProductos(docs);
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
