import Footer from "../layout/Footer";
import MostPurchasedProducts from "../layout/MostPurchasedProducts";
import Navbar from "../layout/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <MostPurchasedProducts />
      <Footer />
    </div>
  );
};

export default Home;
