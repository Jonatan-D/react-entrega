import MOCK_DATA from "../data/MOCK_DATA.json";
//pedir producto a MOCK_DATA
export const pedirDatos = () => {
	return new Promise((resolve, reject) => {
		//cuerpo de la promesa
		setTimeout(() => {
			resolve(MOCK_DATA);
		}, 3000);
	});
};
//Pedir producto a MOCK_DATA pero filtrado por id
export const pedirProductoPorId = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(MOCK_DATA.find((prod) => prod.id === id));
		});
	});
};
