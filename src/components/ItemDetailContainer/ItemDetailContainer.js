import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Loading} from "../Loading/loading";
import {ItemDetail} from "../ItemDetail/ItemDetail";
import {db} from "../../firebase/config";
import {doc, getDoc} from "firebase/firestore";

export const ItemDetailContainder = () => {
	const [item, setItem] = useState(null);
	const [loading, setLoading] = useState(true);
	const {itemId} = useParams();

	useEffect(() => {
		setLoading(true);

		//1 armamos la referencia(sincrónica)

		const referenciaDoc = doc(db, "productos", itemId);
		//2 hacemos el llamado (ASINCRÓNICA)

		getDoc(referenciaDoc)
			.then((documento) => {
				setItem({
					...documento.data(),
					id: documento.id,
				});
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);
	return (
		<div className="container d-flex justify-content-center">
			{loading ? <Loading /> : <ItemDetail item={item} />}{" "}
		</div>
	);
};
