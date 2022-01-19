import React from "react";

const Orders = () => {
  return (
    <div className="orders">
      <h2 className="orders__title">Mes achats</h2>
      <p className="orders__subtitle">Tous les produits achetés</p>

      <div className="orders__headOrder">
        <div className="orders_dateContainer">
          <p>Commandé le</p>
          <p className="orders_date">4 novembre 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Orders;
