import {Item} from "../Item/Item";
import {Separador} from "../Separador/Separador";

//Itemlist retorna el contenedor de las tarjetas
export const ItemList = ({items}) => {
	return (
		<div className="container text-center">
			<h2 className="my-3">PRODUCTOS</h2>
			<Separador />

			<div className="row text-center">
				{items.map((productoItem) => (
					<Item key={productoItem.id} item={productoItem} />
				))}
			</div>
		</div>
	);
};
