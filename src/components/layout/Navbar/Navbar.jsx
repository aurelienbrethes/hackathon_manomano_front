import Navlink from './Navlink';

const linkArray = [
    {
        label : "Produits",
        path : "./produits",
        logo : "/logo",
        alt : "logo produits"
    },
    {
        label : "Promos",
        path : "./promos",
        logo : "/logo",
        alt : "logo promos"
    },
    {
        label : "Mes Listes",
        path : "./listes",
        logo : "/logo",
        alt : "logo listes"
    },
    {
        label : "Comptes et factures",
        path : "./comptes",
        logo : "/logo",
        alt : "logo comptes et factures"
    },
    {
        label : "Panier",
        path : "./panier",
        logo : "/logo",
        alt : "logo panier"
    }
];

const Navbar = () => {
    return(
        <div>
            <img src="" alt="manomano logo" />
            <nav>
                <ul>
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