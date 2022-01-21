import React, { useState } from "react";
import plus from "../../ressources/plus.png";
import moins from "../../ressources/moins.png";

const CartProduct = ({ name, price, img, quantity, setQuantity }) => {
  const [qte, setQte] = useState(0);
  console.log(qte);
  return (
    <div className="cart-product">
      <div className="cart-product__main">
        <img alt="" src={img} className="cart-product__image" />
        <div className="cart-product__info">
          <p className="cart-product__label">{name}</p>

          <p className="cart-product__delivery-price">
            livraison à partir de 4€90
          </p>
          <p className="cart-product__delivery-date">
            entre vendredi 21 et lundi 24 janvier
          </p>
          <button className="cart-product__delete">Supprimer</button>
        </div>
      </div>
      <div className="cart-product__qtyprice">
        <div className="cart-product__qtyprice__spinner">
          <button
            className="cart-product__qtyprice__spinner--left"
            onClick={() => qte > 0 && setQte(qte - 1)}
          >
            <img src={moins} alt="" />
          </button>
          <input
            type="number"
            value={qte}
            onChange={(e) => setQte(e.target.value)}
          />
          <button
            className="cart-product__qtyprice__spinner--right"
            onClick={() => setQte(qte + 1)}
          >
            <img src={plus} alt="" />
          </button>
        </div>
        <div>
          <p className="cart-product__priceTTC">
            {Math.round(price * 1.2)} TTC
          </p>
          <p className="cart-product__priceHT">{price} HT</p>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
