import React, { useContext } from "react";
import ProductsContext from "../../contexts/Products";

const ArticleOrder = ({ img, name, price }) => {
  const { productsOnCart } = useContext(ProductsContext);

  return (
    <div className="articleOrder">
      <p className="articleOrder__livraisonState">Livrée</p>

      <p className="articleOrder__flecheDetails"></p>

      <img src={img} alt="Article" />
      <p className="articleOrder__name">{name}</p>
      <button
        className="articleOrder__btnAjouter"
        onClick={() => {
          productsOnCart.push({
            img: img,
            name: name,
            price: price,
            quantity: 1,
          });
        }}
      >
        Ajouter au panier
      </button>
    </div>
  );
};

export default ArticleOrder;
