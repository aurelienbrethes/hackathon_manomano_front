import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import MostPurchasedProducts from "./components/layout/MostPurchasedProducts";
import Home from "./components/pages/home";
import Orders from "./components/layout/Orders";
import Footer from "./components/layout/Footer";
import AllProducts from './components/layout/AllProducts';
// import Basket from './components/layout/Basket';

function App() {
  return (
    <div className="App">
      {/* <Home />
      <Orders /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<AllProducts />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/favoris" element={<MostPurchasedProducts />} />
        {/* <Route path="/panier" element={<Basket/>} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
