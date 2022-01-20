import React, { useContext } from "react";
import ArticleOrder from "./ArticleOrder";
import ProductsContext from "../../contexts/Products";

const Orders = () => {
  const { products } = useContext(ProductsContext);

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

        <div className="orders__facture">Factures</div>
      </div>

      <div className="orders__paiementContainer">
        <div className="orders__paiement">Mode de paiement: Mastercard</div>
        <button className="orders__btnAjouterTout">
          Tout ajouter au panier
        </button>
        <div className="orders__fraisLivraison">Frais de livraison: 14.50€</div>
      </div>

      {products.map((product, index) => (
        <ArticleOrder key={index} img={product.img} name={product.name} />
      ))}
    </div>
  );
};

export default Orders;
