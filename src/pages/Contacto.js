import React from "react";
import { Row } from "react-flexbox-grid2";
import sprite from "../images/sprite.svg";

export default () => {
  return (
    <Row xs={12} className="main">
      <div className="contactoContainer">
        <div className="contactoContainer__contacto">
          <h2 className="contactoContainer__heading">Contacto</h2>
          <div className="procesoContacto">
            <div className="procesoContacto-1">
              <h3 className="procesoContacto_heading-3">Medios de contacto</h3>
              <h4 className="procesoContacto_heading-4">Correo electronico</h4>
              <p className="procesoContacto__paragraph">
                Puedes comunicarte con nosotros mediante este correo electronico
              </p>
              <label className="procesoContacto__label">
                contacto@enfocate.com
              </label>
            </div>
            <div className="procesoContacto-2">
              <h3 className="procesoContacto_heading-4">O Bien</h3>
            </div>
            <div className="procesoContacto-3">
              <h4 className="procesoContacto_heading-4">
                Puedes contactarnos en alguna de nuestros telefonos reservados
              </h4>
              <ul>
                <li>Hamburgo:12345678</li>
                <li>Los reyes la paz:87654321</li>
                <li>Obregon:09876543</li>
                <li>La viga:34567890</li>
              </ul>
            </div>
          </div>
          <div className="contactoContainer__redesSociales">
            <div className="contactoContainer__redesSociales-item">
              <svg className="icon-svg">
                <use xlinkHref={`${sprite}#icon-facebook1`} />
              </svg>
            </div>
            <div className="contactoContainer__redesSociales-item">
              <svg className="icon-svg">
                <use xlinkHref={`${sprite}#icon-twitter1`} />
              </svg>
            </div>
            <div className="contactoContainer__redesSociales-item">
              <svg className="icon-svg">
                <use xlinkHref={`${sprite}#icon-whatsapp`} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Row>
  );
};
