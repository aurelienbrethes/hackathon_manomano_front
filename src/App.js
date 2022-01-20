import Home from "./components/pages/Home";
import Orders from "./components/layout/Orders";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
// import Produits from './components/layout/Poduits';
// import Comptes from './components/layout/Comptes';

function App() {
  return (
    <div className="App">
      {/* <Home />
      <Orders /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/comptes" element={<Orders />} />
        {/* <Route path="/produits" element={<Produits />} /> */}
        {/* <Route path="/comptes" element={<Comptes />} /> */}
      </Routes>
    </div>
  );
}

export default App;
