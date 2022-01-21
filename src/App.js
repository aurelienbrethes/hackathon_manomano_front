import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import MostPurchasedProducts from "./components/layout/MostPurchasedProducts";
import Home from "./components/pages/Home";
import Orders from "./components/layout/Orders";
import Footer from "./components/layout/Footer";
import AllProducts from './components/layout/AllProducts';
import Cart from "./components/layout/Cart";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<AllProducts />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favoris" element={<MostPurchasedProducts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
