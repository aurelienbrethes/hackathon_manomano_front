import AllProducts from "../layout/AllProducts";
import Navbar from "../layout/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home__body">
        <AllProducts />
      </div>
    </div>
  );
};

export default Home;
