import Home from './components/pages/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/navbar" element={<Navbar />} />
          {/* <Route path="/produits" element={<Produits />} /> */}
          {/* <Route path="/comptes" element={<Comptes />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;