import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__up">
          <div className="footer__up--1">
            <h2>ManoMano infos</h2>
            <h3>Coin renseignements</h3>
            <ul>
              <li>Foire aux questions</li>
              <li>Suivi de commande</li>
              <li>Qui sommes-nous ?</li>
              <li>Devenir marchand</li>
              <li>Contact Presse</li>
              <li>Nous rejoindre</li>
              <li>Programme d'Affiliation</li>
            </ul>
            <h2>Service client</h2>
            <h3>Allo Houston, ici ManoMano</h3>
            <p>01 75 85 01 70</p>
            <p>
              Du lundi au vendredi 8h-20h
              <br />
              Prix d'un appel local.
            </p>
          </div>
          <div className="footer__up--2">
            <h2>Conseils, produits, prix</h2>
            <h3>Vous allez tout savoir par ici</h3>
            <ul>
              <li>Nos bons conseils</li>
              <li>Nos top catégories de produits</li>
              <li>Nos comparatifs</li>
              <li>Nos marques</li>
            </ul>
            <h2>International</h2>
            <h3>Et bientôt présents sur Mars !</h3>
            <div className="footer__italian-flag" />
            <div className="footer__english-flag" />
            <div className="footer__german-flag" />
            <div className="footer__spanish-flag" />
          </div>
          <div className="footer__up--3">
            <h2>Découvrez l'application ManoManoPro*</h2>
            <h3>*Notre application pour les professionnels du bâtiment</h3>
            <div className="footer__app-store" />
            <div className="footer__google-play" />
            <h2>Paiement sécurisé</h2>
            <div className="footer__cb" />
            <div className="footer__visa" />
            <div className="footer__mastercard" />
            <div className="footer__paypal" />
            <div className="footer__virement" />
            <h2>Rejoignez-nous</h2>
            <h3>La magie de l'internet mondial !</h3>
            <div className="footer__twitter" />
            <div className="footer__facebook" />
            <div className="footer__pinterest" />
            <div className="footer__instagram" />
            <div className="footer__blog" />
          </div>
        </div>
        <div className="footer__down">
          <div className="footer__down--1">
            <p>&#169;2022 ManoMano</p>
          </div>
          <div className="footer__down--2">
            <p>Paramétrer mes cookies</p>
            <div className="footer__line" />
            <p>Plan du site</p>
            <div className="footer__line" />
            <p>Mentions légales</p>
            <div className="footer__line" />
            <p>Protection des données</p>
            <div className="footer__line" />
            <p>Conditions générales d'utilisation</p>
            <div className="footer__line" />
            <p>Infos consommateurs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
