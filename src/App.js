import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import MostPurchasedProducts from "./components/layout/MostPurchasedProducts";
import Home from "./components/pages/Home";
import Orders from "./components/layout/Orders";
import Basket from "./components/layout/Basket";

function App() {
  return (
    <div className="App">
      {/* <Home />
      <Orders /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/products" element={<MostPurchasedProducts />} />
        </Route>
        <Route path="/orders" element={<Orders />} />
        <Route path="/panier" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
