import ListGroup from "react-bootstrap/ListGroup";

export const ItemListContainer = ({greeting}) => {
	return (
		<div className="contenedor m-5">
			<h3>{greeting}</h3>

			<ListGroup>
				<ListGroup.Item action variant="secondary">
					Microprocesadores
				</ListGroup.Item>
				<ListGroup.Item action variant="secondary">
					RAM
				</ListGroup.Item>
				<ListGroup.Item action variant="secondary">
					MICE
				</ListGroup.Item>
				<ListGroup.Item action variant="secondary">
					Teclados Mecánicos
				</ListGroup.Item>
			</ListGroup>
			<hr />
		</div>
	);
};
