import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {LoginProvider} from "./Context/LoginContext";
import {CartProvider} from "./Context/CartContext";
import {AppRouter} from "./Routes/AppRouter";
import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {ItemDetailContainder} from "./components/ItemDetailContainer/ItemDetailContainer";
import {Routes, Route, Navigate, BrowserRouter} from "react-router-dom";
import {Cart} from "./components/Cart/Cart";
import {Checkout} from "./components/Chekout/Checkout";

function App() {
	return (
		<BrowserRouter>
			<CartProvider>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer greeting="" />} />
					<Route path="/productos/:categoryId" element={<ItemListContainer />} />
					<Route path="/detalle/:itemId" element={<ItemDetailContainder />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/checkout" element={<Checkout />} />
					{<Route path="*" element={<Navigate to="/" />} />}
				</Routes>
				{/* <AppRouter /> */}
			</CartProvider>
		</BrowserRouter>
	);
}

export default App;
