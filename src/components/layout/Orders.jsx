import React, { useContext, useEffect, useState } from "react";
import ArticleOrder from "./ArticleOrder";
import ProductsContext from "../../contexts/Products";
import download from "../../ressources/download.png";
import axios from "axios";

const Orders = () => {
  const [orderSelected, setOrderSelected] = useState(0);
  const [ordersList, setOrdersList] = useState([]);
  const [orderProducts, setOrderProducts] = useState([]);
  const [orderTotal, setOrderTotal] = useState(0);
  const [orderDate, setOrderDate] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/orders")
      .then((res) => res.data)
      .then((data) => setOrdersList(data))
      .catch((err) => console.err(err));
  }, []);

  // Search all products from my order

  useEffect(() => {
    if (orderSelected > 0) {
      setOrderTotal(
        ordersList.find((order) => order.id_order == orderSelected).total_price
      );
      setOrderDate(
        ordersList.find((order) => order.id_order == orderSelected).date
      );
    }
    axios
      .get(`http://localhost:8000/api/orders/${orderSelected}/products`)
      .then((res) => setOrderProducts(res.data))
      .catch((err) => {
        console.error(err);
      });
  }, [orderSelected]);

  return (
    <div className="orders">
      <h1 className="orders__title">Mes achats</h1>
      <div className="orders__choice">
        <p className="orders__choice-subtitle">Tous les produits achetés</p>
        <select
          id="id_order"
          onChange={(e) => setOrderSelected(e.target.value)}
        >
          <option value="">Choisissez votre commande</option>
          {ordersList.length &&
            ordersList.map((order, index) => (
              <option key={index} value={order.id_order}>
                {order.id_order}
              </option>
            ))}
        </select>
      </div>
      <div className="orders__headOrder">
        {orderDate != "" ? (
          <div className="orders_dateContainer">
            <p className="orders__dateTitle">Commandé le</p>
            <p className="orders__date">{orderDate}</p>
          </div>
        ) : (
          ""
        )}
        {orderTotal != 0 ? (
          <div className="orders__totalContainer">
            <p className="orders__totalHt">Total HT : {orderTotal} €</p>
            <p className="orders__totalTtc">
              Total TTC : {Math.round(orderTotal * 1.2 * 100) / 100}€
            </p>
          </div>
        ) : (
          ""
        )}

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
      {orderProducts.length
        ? orderProducts.map((product) => (
            <ArticleOrder
              key={product.id_product}
              img={product.img}
              name={product.name}
              idProduct={product.id_product}
            />
          ))
        : ""}
    </div>
  );
};

export default Orders;
