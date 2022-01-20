import React from "react";

const CartProduct = ({ name, price, image, quantity, setQuantity }) => {
  return (
    <div className="cart-product">
      <img alt="" src={image} className="cart-product__image" />
      <div className="cart-product__main">
        <p className="cart-product__label">{name}</p>
        <button className="cart-product__delete">Supprimer</button>

        <p className="cart-product__delivery-price">
          livraison à partir de 4€90
        </p>
        <p className="cart-product__delivery-date">
          entre vendredi 21 et lundi 24 janvier
        </p>
      </div>
      <div className="cart-product__qtyprice">
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        ></input>
        <p className="cart-product__priceTTC">{Math.round(price * 1.2)} TTC</p>
        <p className="cart-product__priceHT">{price} HT</p>
      </div>
    </div>
  );
};

export default CartProduct;
