import React, { useContext } from "react";
import ProductsContext from "../../contexts/Products";
import PurchasedProducts from "./PurchasedProducts";

const MostPurchasedProducts = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="most-purchased-products">
      <div className="most-purchased-products__title">
        <h1>Mes produits les plus achetés</h1>
      </div>
      <div className="most-purchased-products__list">
        {products.map((product, index) => (
          <PurchasedProducts
            key={index}
            img={product.img}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default MostPurchasedProducts;
