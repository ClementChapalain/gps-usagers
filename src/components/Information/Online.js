import React from "react";
import { Back } from "../../components";
import "./Styles.css";

const InfoOnline = ({ transition }) => {
  return (
    <div className="Container Info">
      <div className="Header">
        <Back transition={transition} />
      </div>
      <div className="Content">
        <h1>Plus d'informations en ligne</h1>
        <p>
          Vous pouvez trouver plus d'informations sur le RSA sur le{" "}
          <a
            href="https://www.calvados.fr/accueil/le-departement/solidarite---familles/emploi--insertion/revenu-de-solidarite-active-rsa.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            site du Calvados
          </a>{" "}
          ou sur le{" "}
          <a
            href="https://www.service-public.fr/particuliers/vosdroits/N19775"
            rel="noopener noreferrer"
            target="_blank"
          >
            site service-public.fr
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default InfoOnline;
