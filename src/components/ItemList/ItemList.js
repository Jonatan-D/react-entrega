import {Item} from "../Item/Item";

//Itemlist retorna el contenedor de las tarjetas
export const ItemList = ({items}) => {
	return (
		<div className="container text-center">
			<h2>PRODUCTOS</h2>
			<hr />
			<div className="row text-center">
				{items.map((productoItem) => (
					<Item key={productoItem.id} item={productoItem} />
				))}
			</div>
		</div>
	);
};
