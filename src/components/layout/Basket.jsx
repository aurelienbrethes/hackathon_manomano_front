import React from "react";
import panier from "../../ressources/panier_logo.png";
import paiements from "../../ressources/paiements.png";

const Basket = () => {
  return (
    <div className="basket">
      <div className="basket__left">
        <div className="basket__title">
          <img src={panier} alt="" className="basket__title__logo" />{" "}
          <p>Panier</p>
        </div>
        <div className="basket__products">
          <div className="basket__products__display">
            <img src="" alt="" className="basket__products__box" />
            <p> 1 produit label</p>
            <img src="" alt="" className="basket__products__pro" />
          </div>
          <button className="basket__button">Editer un devis</button>
        </div>
        <div className="basket__bottom">
          <p className="basket__bottom__discount">
            Vous avez un code promo ? Gardez le au chaud, vous pourrez l'ajouter
            au moment du paiement.
          </p>
          <div className="basket__bottom__total">
            <div className="basket__total__line">
              <p className=" basket__bottom__total__price">Total du panier</p>
              <p>xxx HT</p>
            </div>
            <div className="basket__total__line">
              <p className=" basket__bottom__total__delivery">
                Frais de livraison calculés à l'étape suivante
              </p>
              <p>xxx HT</p>
            </div>
            <button className="basket__button basket__total__button">
              Passer à la livraison
            </button>
          </div>
        </div>
      </div>
      <div className="basket__right">
        <div className="basket__total__line">
          <p className="basket__total__line__title">Total du panier HT</p>
          <div className="basket__total__line__httc">
            <p>185.12€</p>
            <p className="basket__total__line__ttc">222.14 € TTC</p>
          </div>
        </div>

        <div className="basket__total__line">
          <p className="basket__total__line__title1">Total TVA des produits</p>
          <p>37.02€</p>
        </div>
        <div className="basket__total__line">
          <p className="basket__total__line__title1">Frais de livraison TTC</p>
          <p>4.90€</p>
        </div>
        <div className="basket__total__line">
          <p className="basket__total__line__title1">Total a payer TTC</p>
          <p>227.04€</p>
        </div>
        <button className="basket__button">Passer à la livraison</button>

        <img src={paiements} alt="" />
      </div>
    </div>
  );
};

export default Basket;
