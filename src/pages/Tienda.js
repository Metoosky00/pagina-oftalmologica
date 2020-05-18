import React from "react";
import { Row } from "react-flexbox-grid2";
import sprite from "../images/sprite.svg";
import Producto from "../components/Producto";

export default () => {
  return (
    <Row xs={12} className="main">
      <div className="tienda">
        <div className="tiendaCarrito">
          <div className="tiendaCarrito__group">
            <svg className="tiendaCarrito__icon">
              <use xlinkHref={`${sprite}#icon-shopping-cart`} />
            </svg>
            <span className="tiendaCarrito__number">0</span>
          </div>
        </div>
        <div className="productos">
          <Producto />
          <Producto />
          <Producto />
        </div>
      </div>
    </Row>
  );
};
