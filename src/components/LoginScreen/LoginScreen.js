// import "./LoginScreen.scss";
// import {Separador} from "../Separador/Separador";
// import {form} from "react-bootstrap";
// import {useContext, useState} from "react";
// import {LoginContext} from "../../Context/LoginContext";

// export const LoginScreen = () => {
// 	// foma de manejar pocos inputs, si hay mas campos se debe usar un solo estado con objetos
// 	{
// 		/* const [email, setEmail] = useState("");

// 	 const handleEmail = (e) => {
// 	 	setEmail(e.target.value);
// 	 };
// 	 const [password, setPassword] = useState("");

// 	 const handlePassword = (e) => {
// 	 	setPassword(e.target.value);
// 	 }; */
// 	}

// 	const {usuario, tryLogin} = useContext(LoginContext);

// 	//sintaxis avanzada poara manejar fomularios con multiples inputs sin evento onChange

// 	const [valores, setValores] = useState({
// 		email: "",
// 		password: "",
// 	});

// 	const handleInputChange = (e) => {
// 		console.log(e.target.name);
// 		console.log(e.target.value);

// 		setValores({
// 			...valores,
// 			[e.target.name]: e.target.value,
// 		});
// 	};

// 	const handleSubmit = (e) => {
// 		e.preventDefault();

// 		tryLogin(valores);
// 	};

// 	return (
// 		<div className="loginScreen container">
// 			<div className="loginScreen__login text-center">
// 				<h2>Ingresar</h2>
// 				<Separador />

// 				<form onSubmit={handleSubmit}>
// 					<input
// 						//onChange={handleEmail}
// 						//value={email}
// 						onChange={handleInputChange}
// 						value={valores.email}
// 						type={"text"}
// 						className="form-control my-2"
// 						placeholder="Email"
// 						name="email"
// 					/>
// 					{""}
// 					<input
// 						//onChange={handlePassword}
// 						//value={password}
// 						onChange={handleInputChange}
// 						value={valores.password}
// 						type={"text"}
// 						className="form-control my-2"
// 						placeholder="Password"
// 						name="password"
// 					/>
// 					{""}
// 					<button className="btn btn-primary" type="submit">
// 						Ingresar
// 					</button>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };
