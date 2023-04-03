import "../Footer/Footer.scss";
import {BsFacebook, BsTwitter, BsYoutube, BsInstagram} from "react-icons/bs";

//componente footer con links a redes sociales e información adicional
export const Footer = () => {
	return (
		<div>
			<div class="container-fluid p-0 m-0 ">
				<div class="row p-0 m-0">
					<div class="col-md-12 p-0">
						<footer class="footer">
							<div class="container">
								<div class="row">
									<div class="col-md-3 me-5 m-b-30">
										<div class="footer-title m-t-5 m-b-20 p-b-8">Nosotros</div>
										<p class="white-text">
											Somos una bicicletería con más de 19 años de historia en la ciudad de Córdoba.
											Hoy, trabajamos con la misma pasión con la que iniciamos este camino, manteniendo
											intactos los valores que nos hicieron crecer a paso firme. Y eso se transmite, se
											siente y se disfruta cada vez que alguien se sube a una bicicleta adquirida en
											The Bike Shop.
										</p>
									</div>

									<div class="col-md-3 me-5 m-b-30">
										<div class="footer-title m-t-5 m-b-20 p-b-8">Enlaces rápidos</div>
										<div class="footer-links">
											<a href="#">preguntas frecuentes</a>
											<a href="#">Ver sucursales</a>
											<a href="#">Términos y condiciones</a>
											<a href="#">Políticas de cambio</a>
										</div>
									</div>
									<div class="col-md-3 me-5 m-b-30">
										<div class="footer-title m-t-5 m-b-20 p-b-8">Contacto</div>
										<div class="footer-links">
											<a href="#">Trabaja con nosotros</a>
											<a href="#">0810-888-1234</a>
											<a href="#">Email</a>
											<a href="#">Foro de ayuda</a>
										</div>

										<div class="footer-social-links m-t-30">
											<li>
												<a href="https://www.facebook.com/" target="_blank">
													<BsFacebook />
												</a>
												<a href="https://twitter.com/" target="_blank">
													<BsTwitter />
												</a>
												<a href="https://www.youtube.com/" target="_blank">
													<BsYoutube />
												</a>
												<a href="https://api.whatsapp.com/send?phone=+543516823621" target="_blank">
													<BsInstagram />
												</a>
											</li>
										</div>
									</div>
								</div>
							</div>
						</footer>
						<div class="footer-bottom border-top border-5 border-warning">
							Copyright © 2023, Todos los derechos reservados
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
