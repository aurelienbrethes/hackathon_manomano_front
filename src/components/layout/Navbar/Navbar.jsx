import Navlink from "./Navlink";
import logo from "../../../ressources/logo_manomano.png";
import favoris from "../../../ressources/favoris_logo.png";
import panier from "../../../ressources/panier_logo.png";
import promos from "../../../ressources/promos_logo.png";
import produit from "../../../ressources/produit_logo.png";
import search from "../../../ressources/search.png";
import { Link } from "react-router-dom";

const linkLeftArray = [
  {
    label: "PRODUITS",
    path: "/products",
    logo: produit,
    alt: "logo produits",
  },
  {
    label: "MES COMMANDES",
    path: "/orders",
    logo: promos,
    alt: "commandes logo",
  },
];

const linkRightArray = [
  {
    label: "MES FAVORIS",
    path: "/favoris",
    logo: favoris,
    alt: "logo listes",
  },
  {
    label: "PANIER",
    path: "/cart",
    logo: panier,
    alt: "logo panier",
  },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__top">
        <Link to="/">
          <img src={logo} alt="manomano logo" />
        </Link>
        <div className="navbar__top-contactContainer">
          <div className="navbar__top-contactContainer-sideContact"></div>
          <div className="navbar__top-contactContainer-contact">
            <p>
              Contactez vos conseillers pros <br /> du lundi au vendredi de 8h à
              20h au <span>01 75 85 01 70</span>
            </p>
          </div>
        </div>
      </div>
      <nav className="navbar__bottom">
        <ul className="navbar__bottom-list">
          {linkLeftArray &&
            linkLeftArray.map((e, i) => (
              <Navlink
                key={i}
                label={e.label}
                path={e.path}
                logo={e.logo}
                alt={e.alt}
              />
            ))}
        </ul>
        <div className="navbar__bottom-search">
          <input type="text" value="Effectuer une recherche sur Manomano" />
          <img src={search} alt="search logo" />
        </div>
        <ul className="navbar__bottom-list">
          {linkRightArray &&
            linkRightArray.map((e, i) => (
              <Navlink
                key={i}
                label={e.label}
                path={e.path}
                logo={e.logo}
                alt={e.alt}
              />
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
