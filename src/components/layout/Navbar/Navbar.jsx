import Navlink from "./Navlink";
import logo from "../../../ressources/logo_manomano.png";
import comptes from "../../../ressources/comptes_logo.png";
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
    label: "MES FACTURES",
    path: "/orders",
    logo: comptes,
    alt: "logo comptes et factures",
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
<<<<<<< HEAD
      <nav>
        <ul className="navbar__list">
          {linkArray &&
            linkArray.map((e, i) => (
=======
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
>>>>>>> 370f50723de3dd0aab2f2cd2d627c47d0ec0db3a
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
