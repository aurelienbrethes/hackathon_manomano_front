import axios from "axios";
import React, { useEffect, useState } from "react";
import PurchasedProducts from "./PurchasedProducts";

const MostPurchasedProducts = () => {
  const [purchasedProducts, setPurchasedProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/purchased-products")
      .then((result) => result.data)
      .then((data) => setPurchasedProducts(data));
  }, []);

  console.log(purchasedProducts);

  return (
    <div className="most-purchased-products">
      <div className="most-purchased-products__title">
        <h1>Mes produits les plus achetés</h1>
      </div>
      <div className="most-purchased-products__list">
        {purchasedProducts.length === 0 ? (
          <div className="most-purchased-products__empty">
            <p>
              Effectuez des achats afin de voir les produits que vous commandez
              le plus :)
            </p>
          </div>
        ) : (
          purchasedProducts.map((product, index) => (
            <PurchasedProducts
              key={index}
              img={product.img}
              name={product.name}
              price={product.price}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MostPurchasedProducts;
