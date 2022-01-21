import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Filters from "../../ressources/filter.png";
import Mpro from "../../ressources/mpro.png";
import ProductsContext from "../../contexts/Products";

const AllProducts = () => {
  const { products, setProducts, addProductInCart } =
    useContext(ProductsContext);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products`)
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="allProducts">
      <p className="allProducts__page">
        Accueil {" > "} Outillage {" > "} Outillage électroportatif {" > "}
        <b>Perceuse, visseuse, perforateur, burineur, marteau-piqueur</b>
      </p>
      <p className="allProducts__infoSearch">
        Perceuse, visseuse, perforateur, burineur, marteau-piqueur
      </p>
      <p className="allProducts__numberSearch">Plus de 500 produits trouvés</p>
      <div className="allProducts__body">
        <img
          className="allProducts__body__filters"
          src={Filters}
          alt="filters"
        />
        <div className="allProducts__body__list">
          {products &&
            products.map((product, index) => {
              return (
                <div className="allProducts__body__list__details" key={index}>
                  <div className="allProducts__body__list__details__picture">
                    <img src={product.img} alt={product.name} />
                  </div>
                  <div className="allProducts__body__list__details__brand">
                    {product.brand !== "" ? (
                      <img src={product.brand} alt="marque" />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="allProducts__body__list__details__name">
                    <p>{product.name}</p>
                  </div>
                  <div className="allProducts__body__list__details__price">
                    <div className="allProducts__body__list__details__price__HT">
                      {product.price}
                      <p>€ HT</p>
                    </div>
                    <div className="allProducts__body__list__details__price__TTC">
                      {Math.round(product.price * 1.2 * 100) / 100} € TTC
                      <img src={Mpro} alt="Mpro" />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="allProducts__body__list__details__btnAddCart buttonClass"
                    onClick={() => addProductInCart(product.id_product)}
                  >
                    Ajouter au panier
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
