import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import "./Item.scss";

//Item retorna una tarjeta con datos obtenidos del Json
export const Item = ({item}) => {
	return (
		<Card className="card col-3 my-3 m-2 text-center border-warning" style={{width: "18rem"}}>
			<Card.Img variant=" rounded" src={item.img} alt={item.img} />
			<Card.Body>
				<Card.Title>{item.name}</Card.Title>
				<Card.Text>
					<b>Descripción</b>: {item.description}
				</Card.Text>
				<Card.Text>
					<b>Categoria:</b> {item.category}
				</Card.Text>
				<h6>PRECIO: USD {item.price}</h6>
				<Button as={Link} to={`/detalle/${item.id}`} variant="primary">
					Detalle
				</Button>
			</Card.Body>
		</Card>
	);
};
