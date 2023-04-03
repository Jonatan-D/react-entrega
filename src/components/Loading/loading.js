import loadingBike from "./loading.gif";

//Componente que muestra una animación y la leyenda de carga
export const Loading = () => {
	return (
		<div className="container w-25 overflow-hidden text-center ">
			<img src={loadingBike} className="img-fluid" alt="loading"></img>
			<h3>Cargando</h3>
		</div>
	);
};
