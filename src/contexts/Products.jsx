import React, { createContext } from "react";

const ProductsContext = createContext({
  products: [],
});

export const ProductsContextProvider = ({ children }) => {
  const products = [
    {
      img: "https://cdn.manomano.com/perceuse-visseuse-m18cbldd-502c-milwaukee-4933464556-P-12938589-49217394_1.jpg",
      name: "Perceuse visseuse M18CBLDD-502C MILWAUKEE - 4933464556",
      price: 183.4,
      brand: "https://cdn.manomano.com/marque-milwaukee-50.png"
    },
    {
      img: "https://cdn.manomano.com/vis-ttpc-25-x-35-mm-semin-pour-la-fixation-des-plaques-de-platre-sur-lossature-boite-de-1000-P-7117406-14131300_1.jpg",
      name: "Vis auto perceuse Semin pour la fixation des plaques de plâtre sur l'ossature - intérieur - 25 mm x 3.5 mm - boîte de 1000 pièces",
      price: 6.65,
      brand: "https://cdn.manomano.com/marque-placo-17276387.jpg"
    },
    {
      img: "https://cdn.manomano.com/facom-marteau-manche-graphite-40mm-200c40pb-P-3248867-6700920_1.jpg",
      name: "Marteau manche graphite FACOM marteau rivoir 200C.40 40",
      price: 31.28,
      brand: "https://cdn.manomano.com/marque-facom-651.png"
    },
    {
      img: "https://cdn.manomano.com/pointe-tete-plate-dimos-24-x-50-2650-par-boites-P-8566508-15321436_1.jpg",
      name: "Pointe tête plate DIMOS Ø 2,4 x 50 - 2650 par boites",
      price: 9.36,
      brand: ""
    },
    {
      img: "https://cdn.manomano.com/caisse-a-outis-plastique-15l-facom-bpc16pb-P-20900248-39129316_1.jpg",
      name: "Boîte à Outils Plastique 16'' fermeture automatique FACOM BP.C16NPB",
      price: 16.3,
      brand: "https://cdn.manomano.com/marque-facom-651.png"
    },
    {
      img: "https://cdn.manomano.com/parasol-jardin-deporte-en-aluminium-sun-4-rectangulaire-3-x-4-m-ecru-P-36784-526076_1.jpg",
      name: "Parasol jardin déporté Alu - Rectangle - 3 x 4 m - Ecru",
      price: 149.17,
      brand: "https://media-exp1.licdn.com/dms/image/C560BAQE_ZhE3kimwEA/company-logo_200_200/0/1519865512863?e=1650499200&v=beta&t=75KvozRBcdIjlHfkcgFTEezPlVQe9vRHdH_ATcPBRCk"
    },
    {
      img: "https://cdn.manomano.com/scie-380mm-1-20-119-P-20900248-39129169_1.jpg",
      name: "Niveau Tubulaire - 120 cm - 3 Fioles - FATMAX Pro - STANLEY, 0-43-648",
      price: 47.48,
      brand: "https://cdn.manomano.com/marque-stanley-26.jpg"
    },
    {
      img: "https://cdn.manomano.com/scie-sauteuse-makita-650w-en-coffret-mak-pac-jv0600j-P-8566508-15322078_1.jpg",
      name: "Scie sauteuse MAKITA 650W En coffret MAK-PAC - JV0600J",
      price: 97.17,
      brand: "https://cdn.manomano.com/marque-makita-16.jpg"
    },
    {
      img: "https://cdn.manomano.com/3-rouleaux-detancheite-teflon-longeur-12m-largeur-12mm-noyon-thiebault-P-5536067-29409418_1.jpg",
      name: "3 rouleaux d'étanchéité Téflon® longeur 12m largeur 12mm NOYON & THIEBAULT",
      price: 1.5,
    },
    {
      img: "https://cdn.manomano.com/haemmerlin-betonniere-non-tractable-160l-700w-bt-pro-170-P-273920-1442888_1.jpg",
      name: "BÉTONNIÈRE ÉLECTRIQUE HAEMMERLIN PROFESSIONNELLE BT PRO 190 - 315519001--",
      price: 568.37,
    },
  ];

  return (
    <ProductsContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
