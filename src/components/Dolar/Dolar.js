import {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

//Componente PopUp que conecta a una API  externa para mostrar la cotizacion del Dolar actualizado. Fuente:DolarSi
export const Dolar = () => {
	const [dolarBlue, setDolarBlue] = useState(false);
	useEffect(() => {
		fetch("https://dolar-api-argentina.vercel.app/v1/dolares/blue")
			.then((response) => response.json())
			.then((data) => {
				setDolarBlue(data);
			});
	}, []);

	//formateando fecha recibida desde la API
	const fechaApi = dolarBlue.fechaActualizacion;
	const fecha = new Date(fechaApi);

	const opcionesFecha = {
		year: "numeric",
		month: "long",
		day: "numeric",
		timeZone: "America/Argentina/Buenos_Aires",
	};

	const opcionesHora = {
		hour: "numeric",
		minute: "numeric",
		timeZone: "America/Argentina/Buenos_Aires",
	};

	const fechaFormateada = fecha.toLocaleDateString("es-AR", opcionesFecha);
	const horaFormateada = fecha.toLocaleTimeString("es-AR", opcionesHora);

	console.log(fechaApi);

	return (
		<div>
			{["bottom"].map((placement) => (
				<OverlayTrigger
					trigger="click"
					key={placement}
					placement={placement}
					overlay={
						<Popover id={`popover-positioned-${placement}`}>
							<Popover.Header as="h3">Valores actualizados</Popover.Header>
							<Popover.Body>
								{/*Expresion para que no se renderize antes de tener datos y de error "undefined" a dolarBlue.nombre, etc
								 */}
								{dolarBlue && (
									<div>
										<p>
											<strong>Fecha: </strong>

											{fechaFormateada}
										</p>
										<p>
											<strong>Hora: </strong>

											{horaFormateada}
										</p>
										<p>
											<strong>Dolar: </strong>
											{dolarBlue.nombre}
										</p>
										<strong>Valor: ${dolarBlue.venta}</strong>
									</div>
								)}
							</Popover.Body>
						</Popover>
					}>
					<Button variant="secondary"> Valor Dolar</Button>
				</OverlayTrigger>
			))}
		</div>
	);
};
