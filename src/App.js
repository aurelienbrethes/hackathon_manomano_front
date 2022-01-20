import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import MostPurchasedProducts from './components/layout/MostPurchasedProducts';
import Home from "./components/pages/Home";
import Orders from "./components/layout/Orders";
import Footer from './components/layout/Footer';

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
