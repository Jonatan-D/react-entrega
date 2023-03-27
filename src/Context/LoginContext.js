import {createContext, useState} from "react";

export const LoginContext = createContext();

const MOCK_USERS = [
	{
		id: 1,
		email: "admin@admin.com",
		password: "admin",
		nombre: "Juan",
	},
	{
		id: 2,
		email: "admin1@admin1.com",
		password: "admin1",
		nombre: "Carlos",
	},
	{
		id: 3,
		email: "admin2@admin2.com",
		password: "admin2",
		nombre: "Roberto",
	},
];

export const LoginProvider = ({children}) => {
	const [usuario, setUsuario] = useState({
		email: null,
		logged: true,
	});
	console.log(usuario);

	const tryLogin = (valores) => {
		const match = MOCK_USERS.find((user) => user.email === valores.email);

		if (match && match.password === valores.password) {
			setUsuario({
				logged: true,
				email: match.email,
			});
		}
	};

	const logout = () => {
		setUsuario({
			email: null,
			logged: false,
		});
	};

	return (
		<LoginContext.Provider
			value={{
				usuario,
				tryLogin,
				logout,
			}}>
			{children}
		</LoginContext.Provider>
	);
};
