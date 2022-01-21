import React, { useContext, useEffect, useState } from "react";
import panier from "../../ressources/panier_logo.png";
import paiements from "../../ressources/paiements.png";
import CartProduct from "./CartProduct";
import ProductsContext from "../../contexts/Products";

const Cart = () => {
  const { productsOnCart } = useContext(ProductsContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (productsOnCart.length) {
      setTotal(
        productsOnCart.reduce(
          (sum, product) => sum + product.price * product.quantity,
          0
        )
      );
    } else {
      setTotal(0);
    }
  }, [productsOnCart]);

  return (
    <div className="cart">
      <div className="cart__left">
        <div className="cart__title">
          <img src={panier} alt="" className="cart__title__logo" />{" "}
          <p>Panier</p>
        </div>
        <div className="cart__products">
          <div className="cart__products__display">
            <img src="" alt="" className="cart__products__box" />
            {productsOnCart && <p> 1 produit label</p>}
            <img src="" alt="" className="cart__products__pro" />
          </div>
          <button className="cart__button">Editer un devis</button>
        </div>
        <div className="cart__map">
          {productsOnCart.length > 0 &&
            productsOnCart.map((cartProduct, index) => (
              <CartProduct
                key={index}
                img={cartProduct.img}
                name={cartProduct.name}
                price={cartProduct.price}
                quantity={cartProduct.quantity}
                idProduct={cartProduct.id_product}
              />
            ))}
        </div>
        <div className="cart__bottom">
          <p className="cart__bottom__discount">
            Vous avez un code promo ? Gardez le au chaud, vous pourrez l'ajouter
            au moment du paiement.
          </p>
          <div className="cart__bottom__total">
            <div className="cart__total__line">
              <p className=" cart__bottom__total__price">Total du panier</p>
              <p>{total} € HT</p>
            </div>
            <div className="cart__total__line">
              <p className=" cart__bottom__total__delivery">
                Frais de livraison calculés à l'étape suivante
              </p>
              <p>{Math.round(total * 1.2 * 100) / 100} € TTC</p>
            </div>
            <button className="cart__button cart__total__button">
              Passer à la livraison
            </button>
          </div>
        </div>
      </div>
      <div className="cart__right">
        <div className="cart__total__line">
          <p className="cart__total__line__title">Total du panier HT</p>
          <div className="cart__total__line__httc">
            <p>{total} € HT</p>
            <p className="cart__total__line__ttc">
              {Math.round(total * 1.2 * 100) / 100} € TTC
            </p>
          </div>
        </div>

        <div className="cart__total__line">
          <p className="cart__total__line__title1">Total TVA des produits</p>
          <p>{Math.round(total * 0.2 * 100) / 100} €</p>
        </div>
        <div className="cart__total__line">
          <p className="cart__total__line__title1">Frais de livraison TTC</p>
          <p>4.90€</p>
        </div>
        <div className="cart__total__line">
          <p className="cart__total__line__title1">Total a payer TTC</p>
          <p>{Math.trunc((total * 1.2 + 4.9) * 100) / 100} €</p>
        </div>
        <button className="cart__button">Passer à la livraison</button>

        <img src={paiements} alt="" />
      </div>
    </div>
  );
};

export default Cart;
