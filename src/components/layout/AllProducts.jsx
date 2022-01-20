import { useEffect, useState } from "react";
import axios from 'axios';

const AllProducts = () => {
    const [allItems, setAllItems] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`).then((res) => setAllItems(res.data));
    }, []);

    console.log(allItems)
    return (
        <div className="allProducts">
            <p className="allProducts__page">Accueil {" > "} Outillage {" > "} Outillage électroportatif {" > "} <b>Perceuse, visseuse, perforateur, burineur, marteau-piqueur</b></p>
            <p className="allProducts__infoSearch">Perceuse, visseuse, perforateur, burineur, marteau-piqueur</p>
            <p className="allProducts__numberSearch">Plus de 500 produits trouvés</p>
                <div className="allProducts__list">
                {allItems.map((item, index) => {
                    return (
                        <div className="allProducts__list__details" key={index}>
                            <div className="allProducts__list__details__picture"><img src={item.img} alt={item.name} /></div>
                            <div className="allProducts__list__details__brand">{item.brand !== "" ? <img src={item.brand} alt="marque" /> : ""}</div>
                            <div className="allProducts__list__details__name"><p>{item.name}</p></div>
                            <div className="allProducts__list__details__price">{item.price} € HT</div>
                        </div>
                    )
                })}
                </div>
        </div>
    )
}

export default AllProducts;