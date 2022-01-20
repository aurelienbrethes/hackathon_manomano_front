import Navlink from './Navlink';
import logo from '../../../ressources/logo_manomano.png';
import comptes from '../../../ressources/comptes_logo.png';
import favoris from '../../../ressources/favoris_logo.png';
import panier from '../../../ressources/panier_logo.png';
import promos from '../../../ressources/promos_logo.png';
import produit from '../../../ressources/produit_logo.png';
import { Link } from 'react-router-dom';


const linkArray = [
    {
        label : "PRODUITS",
        path : "/products",
        logo : produit,
        alt : "logo produits"
    },
    {
        label : "PROMOS",
        path : "",
        logo : promos,
        alt : "logo promos"
    },
    {
        label : "MES LISTES",
        path : "",
        logo : favoris,
        alt : "logo listes"
    },
    {
        label : "COMPTES ET FACTURES",
        path : "/orders",
        logo : comptes,
        alt : "logo comptes et factures"
    },
    {
        label : "PANIER",
        path : "",
        logo : panier,
        alt : "logo panier"
    }
];

const Navbar = () => {
    return(
        <div className='navbar'>
            <Link to="/">
                <img src={logo} alt="manomano logo" />
            </Link>            
            <nav>
                <ul className='navbar__list'>
                    {linkArray && linkArray.map((e, i) =>
                        <Navlink
                            key = {i}
                            label = {e.label}
                            path = {e.path}
                            logo = {e.logo}
                            alt = {e.alt}
                        />
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;