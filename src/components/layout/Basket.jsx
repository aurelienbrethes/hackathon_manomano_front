import React from "react";

const Basket = () => {
  return (
    <div>
      <div className="left">
        <div>
          <button>Panier</button>
        </div>
        <button>Editer un devis</button>
        <p>1 produit label </p>
        <div className="bas">
          <p>
            Vous avez un code promo ? Grdez le au chaud, vous pourrez l'ajouter
            au moment du paiement.
          </p>
          <div>
            <p>Total du panier TTC</p>
            <p>Frais de livraison calculés à l'étape suivante</p>
            <p>260€</p>
            <button>Passer à la livraison</button>
          </div>
        </div>
      </div>
      <div className="right">
        <p>Total du panier HT</p>
        <p>185.12€</p>
        <p>222.14 € TTC</p>
        <p>Total TVA des produits</p>
        <p>37.02€</p>
        <p>Frais de livraison TTC</p>
        <p>4.90€</p>
        <p>Total a payer TTC</p>
        <p>227.04€</p>
        <button>Passer à la livraison</button>

        <img alt="" />
      </div>
    </div>
  );
};

export default Basket;
