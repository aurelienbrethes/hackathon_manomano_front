import Navlink from './Navlink';
import logo from '../../../ressources/logo_manomano.png';
import comptes from '../../../ressources/comptes_logo.png';
import favoris from '../../../ressources/favoris_logo.png';
import panier from '../../../ressources/panier_logo.png';
import promos from '../../../ressources/promos_logo.png';
import produit from '../../../ressources/produit_logo.png';

const linkArray = [
    {
        label : "PRODUITS",
        path : "/produits",
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
        path : "/comptes",
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
            <img src={logo} alt="manomano logo" />
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