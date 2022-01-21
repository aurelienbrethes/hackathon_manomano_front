import { useEffect, useState } from "react";
import axios from "axios";
import Filters from "../../ressources/filter.png";
import Mpro from "../../ressources/mpro.png";

const AllProducts = () => {
  const [allItems, setAllItems] = useState([]);

  const productsOnCart = [];

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products`).then((res) => setAllItems(res.data));
  }, []);

  return (
    <div className="allProducts">
      <p className="allProducts__page">
        Accueil {" > "} Outillage {" > "} Outillage électroportatif {" > "}
        <b>Perceuse, visseuse, perforateur, burineur, marteau-piqueur</b>
      </p>
      <p className="allProducts__infoSearch">
        Perceuse, visseuse, perforateur, burineur, marteau-piqueur
      </p>
      <p className="allProducts__numberSearch">Plus de 500 produits trouvés</p>
      <div className="allProducts__body">
        <img className="allProducts__body__filters" src={Filters} alt="filters"/>
        <div className="allProducts__body__list">
          {allItems.map((item, index) => {
            return (
              <div className="allProducts__body__list__details" key={index}>
                <div className="allProducts__body__list__details__picture">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="allProducts__body__list__details__brand">
                  {item.brand !== "" ? (
                    <img src={item.brand} alt="marque" />
                  ) : (
                    ""
                  )}
                </div>
                <div className="allProducts__body__list__details__name">
                  <p>{item.name}</p>
                </div>
                <div className="allProducts__body__list__details__price">
                  <div className="allProducts__body__list__details__price__HT">
                    {item.price}
                    <p>€00 HT</p>
                  </div>
                  <div className="allProducts__body__list__details__price__TTC">
                    {(item.price * 20) / 100 + item.price} € TTC
                    <img src={Mpro} alt="Mpro" />
                  </div>
                </div>
                <button type="button" className="allProducts__body__list__details__btnAddCart" 
                onClick={() => {productsOnCart.push({...item})}}>Ajouter au panier</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
