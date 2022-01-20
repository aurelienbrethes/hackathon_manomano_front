import Home from './components/pages/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import MostPurchasedProducts from './components/layout/MostPurchasedProducts';
// import Comptes from './components/layout/Comptes';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/products" element={<MostPurchasedProducts />} />
          {/* <Route path="/comptes" element={<Comptes />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;