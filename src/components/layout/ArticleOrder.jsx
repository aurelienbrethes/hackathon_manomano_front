import React from "react";

const ArticleOrder = () => {
  return (
    <div className="articleOrder">
      <p className="articleOrder__livraisonState">Livrée</p>
      <p className="articleOrder__flecheDetails">></p>
      <img
        src="https://cdn.manomano.com/images/images_products/14312071/T/28087380_1.jpg"
        alt="Article"
      />
      <p className="articleOrder__name">Nom de l'article</p>
      <button className="articleOrder__btnAjouter">Ajouter au panier</button>
    </div>
  );
};

export default ArticleOrder;
