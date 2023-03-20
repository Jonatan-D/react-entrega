import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {ItemDetailContainder} from "./components/ItemDetailContainer/ItemDetailContainer";
import {CartProvider} from "./Context/CartContext";
import {Cart} from "./components/Cart/Cart";

function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer greeting="" />} />
					<Route path="/productos/:categoryId" element={<ItemListContainer />} />
					<Route path="/detalle/:itemId" element={<ItemDetailContainder />} />
					<Route path="/cart" element={<Cart />} />

					{<Route path="*" element={<Navigate to="/" />} />}
				</Routes>
			</BrowserRouter>
		</CartProvider>
	);
}

export default App;
