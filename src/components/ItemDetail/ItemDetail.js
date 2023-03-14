import {Link, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";

export const ItemDetail = ({item}) => {
	const navigate = useNavigate();

	const handleVolver = () => {
		navigate(-1);
	};

	return (
		<div className="container text-center">
			<div className="container my-5 p-5">
				<h3>{item.name}</h3>
				<img src={item.img} alt={item.img}></img>
				<p>{item.description}</p>
				<p>
					<b>Detalle: </b>
					{item.detail}
				</p>
				<p>
					<b>Precio: $</b>
					{item.price}
				</p>
				<button as={Link} onClick={handleVolver} className="btn btn-primary">
					Volver
				</button>
			</div>
		</div>
	);
};
