import React from "react";

const Orders = () => {
  return (
    <div className="orders">
      <h1 className="orders__title">Mes achats</h1>
      <p className="orders__subtitle">Tous les produits achetés</p>

      <div className="orders__headOrder">
        <div className="orders_dateContainer">
          <p className="orders__dateTitle">Commandé le</p>
          <p className="orders__date">4 novembre 2021</p>
        </div>

        <div className="orders_totalContainer">
          <p className="orders_totalHt">Total HT : 71.37€</p>
          <p className="orders_totalTtc">Total TTC : 85.65€</p>
        </div>
      </div>
    </div>
  );
};

export default Orders;
