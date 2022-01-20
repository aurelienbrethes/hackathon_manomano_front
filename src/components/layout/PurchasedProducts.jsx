import React from "react";

const PurchasedProducts = ({ img, name, price }) => {
  return (
    <div className="purchased-product">
      <div className="purchased-product__img">
        <img src={img} alt="product" />
      </div>
      <div className="purchased-product__name">
        <p>{name}</p>
      </div>
      <div className="purchased-product__price">
        <p>{price} € HT</p>
      </div>
      <div className="purchased-product__btn">
        <button>Ajouter au panier</button>
      </div>
    </div>
  );
};

export default PurchasedProducts;
