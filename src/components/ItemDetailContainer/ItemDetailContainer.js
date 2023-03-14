import {useEffect, useState} from "react";
import {pedirProductoPorId} from "../../helpers/pedirDatos";
import {useParams} from "react-router-dom";
import {Loading} from "../Loading/loading";
import {ItemDetail} from "../ItemDetail/ItemDetail";

export const ItemDetailContainder = () => {
	const [item, setItem] = useState(null);
	const [loading, setLoading] = useState(true);
	const {itemId} = useParams();

	useEffect(() => {
		setLoading(true);

		pedirProductoPorId(Number(itemId))
			.then((resp) => {
				setItem(resp);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);
	return <div>{loading ? <Loading /> : <ItemDetail item={item} />} </div>;
};
