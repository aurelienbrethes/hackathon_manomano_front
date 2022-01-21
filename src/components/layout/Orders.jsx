import React, { useContext, useEffect, useState } from "react";
import ArticleOrder from "./ArticleOrder";
import ProductsContext from "../../contexts/Products";
import download from "../../ressources/download.png";
import axios from "axios";

const Orders = ({ img, name }) => {
  const { productsOnCart } = useContext(ProductsContext);

  const [orderNumber, setOrderNumber] = useState(0);
  const [productsList, setProductsList] = useState([]);
  const [listNumber, setListNumber] = useState();

  console.log(productsList);

  // Search all products from my order

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/orders/${orderNumber}/products`)
      .then((res) => setProductsList(res.data))
      .catch((err) => {
        console.error(err);
      });
  }, [orderNumber]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/orders")
      .then((res) => res.data)
      .then((data) => setListNumber(data))
      .catch((err) => console.err(err));
  }, []);

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
          <p>Factures</p>
        </div>
      </div>
      <div className="orders__paiementContainer">
        <div className="orders__paiement">Mode de paiement: Mastercard</div>
        <button
          className="buttonClass"
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
            key={product.id_product}
            img={product.img}
            name={product.name}
          />
        ))}
    </div>
  );
};

export default Orders;
