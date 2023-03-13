import loadingBike from "./loading.gif";
export const Loading = () => {
	return (
		<div className="w-25 overflow-hidden text-center">
			<img src={loadingBike} className="img-fluid"></img>
			<h3>Cargando</h3>
		</div>
	);
};
