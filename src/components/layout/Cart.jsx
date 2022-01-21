import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import panier from "../../ressources/panier_logo.png";
import paiements from "../../ressources/paiements.png";
import CartProduct from "./CartProduct";
import ProductsContext from "../../contexts/Products";

const Cart = () => {
  const { productsOnCart } = useContext(ProductsContext);
  const [total, setTotal] = useState(0);
  console.log(productsOnCart);
  const totalPrice = 41;

  console.log(productsOnCart);
  useEffect(() => {
    let tototal = 0;
    if (productsOnCart.length) {
      console.log(
        productsOnCart.reduce((sum, product) => sum + product.price, 0)
      );
    }
    // console.log(tototal);
  }, []);

  const handleCreateOrder = () => {
    axios
      .post("http://localhost:8000/api/orders", {
        total_price: totalPrice,
        date: new Date(),
      })
      .then((order) => handleAddOrder(order.id_order, 2));
  };

  const handleAddOrder = (id_order, id_product) => {
    axios.post(`http://localhost:8000/api/orders/${id_order}/products`, {
      id_order: id_order,
      id_product: id_product,
    });
  };

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
            <p> 1 produit label</p>
            <img src="" alt="" className="cart__products__pro" />
          </div>
          <button className="cart__button buttonClass">Editer un devis</button>
        </div>
        <div className="cart__map">
          {productsOnCart.length &&
            productsOnCart.map((cartProduct, index) => (
              <CartProduct
                key={index}
                img={cartProduct.img}
                name={cartProduct.name}
                price={cartProduct.price}
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
              <p>xxx HT</p>
            </div>
            <div className="cart__total__line">
              <p className=" cart__bottom__total__delivery">
                Frais de livraison calculés à l'étape suivante
              </p>
              <p>xxx HT</p>
            </div>
            <button
              className="cart__button cart__total__button buttonClass"
              onClick={() => handleCreateOrder()}
            >
              Passer à la livraison
            </button>
          </div>
        </div>
      </div>
      <div className="cart__right">
        <div className="cart__total__line">
          <p className="cart__total__line__title">Total du panier HT</p>
          <div className="cart__total__line__httc">
            <p>185.12€</p>
            <p className="cart__total__line__ttc">222.14 € TTC</p>
          </div>
        </div>

        <div className="cart__total__line">
          <p className="cart__total__line__title1">Total TVA des produits</p>
          <p>37.02€</p>
        </div>
        <div className="cart__total__line">
          <p className="cart__total__line__title1">Frais de livraison TTC</p>
          <p>4.90€</p>
        </div>
        <div className="cart__total__line">
          <p className="cart__total__line__title1">Total a payer TTC</p>
          <p>227.04€</p>
        </div>
        <button className="cart__button buttonClass">
          Passer à la livraison
        </button>

        <img src={paiements} alt="" />
      </div>
    </div>
  );
};

export default Cart;
