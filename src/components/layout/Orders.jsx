import React, { useContext, useEffect, useState } from "react";
import ArticleOrder from "./ArticleOrder";
import ProductsContext from "../../contexts/Products";
import download from "../../ressources/download.png";
import axios from "axios";

const Orders = ({ img, name }) => {
  const { productsOnCart } = useContext(ProductsContext);

  const [productsList, setProductsList] = useState([]);
  console.log(productsList);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/orders`)
      .then((res) => setProductsList(res.data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="orders">
      <h1 className="orders__title">Mes achats</h1>
      <p className="orders__subtitle">Tous les produits achetés</p>
      <div className="orders__headOrder">
        <div className="orders_dateContainer">
          <p className="orders__dateTitle">Commandé le</p>
          <p className="orders__date">4 novembre 2021</p>
        </div>

        <div className="orders__totalContainer">
          <p className="orders__totalHt">Total HT : 71.37€</p>
          <p className="orders__totalTtc">Total TTC : 85.65€</p>
        </div>

        <div className="orders__facture">
          <img src={download} alt="Logo download" />
          <p>Factures</p>
        </div>
      </div>
      <div className="orders__paiementContainer">
        <div className="orders__paiement">Mode de paiement: Mastercard</div>
        <button
          className="orders__btnAjouterTout"
          onClick={() => {
            productsOnCart.push({
              img: img,
              name: name,
              quantity: 1,
              price: 1,
            });
          }}
        >
          Tout ajouter au panier
        </button>
        <div className="orders__fraisLivraison">Frais de livraison: 14.50€</div>
      </div>
      {productsList &&
        productsList.map((product) => (
          <ArticleOrder
            key={product.id}
            img={product.img}
            name={product.name}
          />
        ))}
    </div>
  );
};

export default Orders;
