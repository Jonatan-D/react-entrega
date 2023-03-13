export const Item = ({item}) => {
	return (
		<div className="col-3 my-3 text-center">
			<img src={item.img} alt={item.img} className="rounded"></img>
			<h3>{item.name}</h3>
			<p>{item.description}</p>
			<h6>PRECIO: ${item.price}</h6>
			<button className="btn btn-primary"> Detalle</button>
		</div>
	);
};
