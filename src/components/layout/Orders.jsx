import React, { useContext, useEffect } from "react";
import ArticleOrder from "./ArticleOrder";
import ProductsContext from "../../contexts/Products";
import download from "../../ressources/download.png";
import axios from "axios";

const Orders = ({ img, name }) => {
  const { products, setProducts } = useContext(ProductsContext);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products`)
      .then((res) => setProducts(res.data))
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
            alert("non je ne crois pas");
          }}
        >
          Tout ajouter au panier
        </button>
        <div className="orders__fraisLivraison">Frais de livraison: 14.50€</div>
      </div>
      {products &&
        products.map((product) => (
          <ArticleOrder
            key={product.id}
            img={product.img}
            name={product.name}
            idProduct={product.id_product}
          />
        ))}
    </div>
  );
};

export default Orders;
