import React from "react";
import { Row } from "react-flexbox-grid2";
import sprite from "../images/sprite.svg";

export default () => {
  return (
    <Row xs={12} className="footer">
      <div className="privacity">
        <span>
          &copy; todos los derechos reservados esta es una obra de prueba creada
          por Jose Eduardo Malfavon Talavera y es solo con fines educativos{" "}
        </span>
      </div>
      <div className="social">
        <div className="social-redes">
          <svg className="social-redes-icon">
            <use xlinkHref={`${sprite}#icon-facebook1`} />
          </svg>
          <svg className="social-redes-icon">
            <use xlinkHref={`${sprite}#icon-twitter1`} />
          </svg>
          <svg className="social-redes-icon">
            <use xlinkHref={`${sprite}#icon-whatsapp`} />
          </svg>
        </div>
      </div>
    </Row>
  );
};
