import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartProvider } from "./context/cartContext";
import { ThemeProvider } from "@mui/system";
import theme from "../src/themes/theme";
import Footer from "./components/Footer";

function App() {


  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <BrowserRouter>
          <div className="App" style={{display:'flex', flexDirection:'column', minHeight:'100vh'}}>
            <div style={{
              backgroundColor: '#0D1321',
              minHeight: '90vh'
              }}>
                <NavBar />
                <Routes>
                  <Route exact path="/" element={<ItemListContainer />} />
                  <Route exact path="/juegos" element={<ItemListContainer />} />
                  <Route exact path="/juegos/:itemId" element={<ItemDetailContainer />} />
                  <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
                  <Route exact path="/cart" element={<Cart />} />
                </Routes>
              </div>
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
