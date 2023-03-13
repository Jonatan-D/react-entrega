import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<ItemListContainer greeting="" />} />
			</Routes>

			<div className="App">
				<header className="App-header"></header>
			</div>
		</BrowserRouter>
	);
}

export default App;
