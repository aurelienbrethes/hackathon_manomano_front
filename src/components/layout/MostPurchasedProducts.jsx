import React from "react";
import { useContext } from "react";
import ProductsContext from "../../contexts/Products";

const MostPurchasedProducts = () => {
  const { products } = useContext(ProductsContext);
  console.log(products);
  return (
    <div className="most-purchased-products">
      <h1>Mes produits les plus achetés</h1>
    </div>
  );
};

export default MostPurchasedProducts;
