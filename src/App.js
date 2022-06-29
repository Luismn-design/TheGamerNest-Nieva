import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartProvider } from "./context/cartContext";

function App() {


  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/juegos" element={<ItemListContainer />} />
          <Route exact path="/juegos/:itemId" element={<ItemDetailContainer />} />
          <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
