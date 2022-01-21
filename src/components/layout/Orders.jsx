import React, { useContext, useEffect, useState } from "react";
import ArticleOrder from "./ArticleOrder";
import ProductsContext from "../../contexts/Products";
import download from "../../ressources/download.png";
import axios from "axios";

const Orders = ({ img, name }) => {
  const { products, setProducts } = useContext(ProductsContext);

  const [orderNumber, setOrderNumber] = useState(0);
  const [listNumber, setListNumber] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/orders")
      .then((res) => res.data)
      .then((data) => setListNumber(data))
      .catch((err) => console.err(err));
  }, []);

  // Search all products from my order

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/orders/${orderNumber}/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.error(err);
      });
  }, [orderNumber]);

  return (
    <div className="orders">
      <h1 className="orders__title">Mes achats</h1>
      <div className="orders__choice">
        <p className="orders__choice-subtitle">Tous les produits achetés</p>
        <select id="id_order" onChange={(e) => setOrderNumber(e.target.value)}>
          <option value="">Choisissez votre commande</option>
          {listNumber &&
            listNumber.map((number, index) => (
              <option key={index} value={number.id_order}>
                {number.id_order}
              </option>
            ))}
        </select>
      </div>
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
          <p>Facture</p>
        </div>
      </div>
      <div className="orders__paiementContainer">
        <div className="orders__paiement">Mode de paiement: Mastercard</div>
        <button
          className="buttonClass"
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
            key={product.id_product}
            img={product.img}
            name={product.name}
            idProduct={product.id_product}
          />
        ))}
    </div>
  );
};

export default Orders;
