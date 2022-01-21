import React, { useContext, useState } from "react";
import plus from "../../ressources/plus.png";
import moins from "../../ressources/moins.png";
import ProductsContext from "../../contexts/Products";

const CartProduct = ({ name, price, img, quantity, idProduct }) => {
  const { modifyProductInCart } = useContext(ProductsContext);
  const [productQuantity, setProductQuantity] = useState(quantity);

  const changeQuantity = (newQuantity) => {
    console.log(newQuantity);
    setProductQuantity(newQuantity);
    modifyProductInCart(idProduct, newQuantity);
  };

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

          <button
            className="cart-product__delete"
            onClick={() => changeQuantity(0)}
          >
            Supprimer
          </button>
        </div>
      </div>
      <div className="cart-product__qtyprice">
        <div className="cart-product__qtyprice__spinner">
          <button
            className="cart-product__qtyprice__spinner--left"
            onClick={() => changeQuantity(productQuantity - 1)}
          >
            <img src={moins} alt="" />
          </button>
          <input type="number" value={productQuantity} readOnly />
          <button
            className="cart-product__qtyprice__spinner--right"
            onClick={() => changeQuantity(productQuantity + 1)}
          >
            <img src={plus} alt="" />
          </button>
        </div>
        <div>
          <p className="cart-product__priceTTC">
            {Math.round(price * 1.2 * 100) / 100} € TTC
          </p>
          <p className="cart-product__priceHT">{price} € HT</p>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
