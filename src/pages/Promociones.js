import React from "react";
import { Row } from "react-flexbox-grid2";
import img from "../images/header-image.jpg";

export default () => {
  return (
    <Row xs={12} className="main">
      <div className="promocioness">
        <div className="promocioness__promocion">
          <div className="promocioness__promocion-img promocioness__promocion-img--animated">
            <img src={img} alt="prueba1" />
          </div>
          <div className="promocioness__promocion-producto">
            <div className="promocioness__promocion-descripcionProducto promocioness__promocion-descripcionProducto--animated">
              <ul>
                Nombre:
                <li>Marca:</li>
                <li>Precio:</li>
                <li>En existencia:</li>
                <li>Descuento:</li>
                <li>Tipo:</li>
              </ul>
            </div>
            <div className="promocioness__promocion-irProducto">
              <button className="btn-promocion btn-promocion--primary btn-promocion--animated">
                Ver el producto en la tienda
              </button>
            </div>
          </div>
        </div>
        <div className="promocioness__promocion">
          <div className="promocioness__promocion-img promocioness__promocion-img--animated">
            <img src={img} alt="prueba1" />
          </div>
          <div className="promocioness__promocion-producto">
            <div className="promocioness__promocion-descripcionProducto promocioness__promocion-descripcionProducto--animated">
              <ul>
                Nombre:
                <li>Marca:</li>
                <li>Precio:</li>
                <li>En existencia:</li>
                <li>Descuento:</li>
                <li>Tipo:</li>
              </ul>
            </div>
            <div className="promocioness__promocion-irProducto">
              <button className="btn-promocion btn-promocion--primary btn-promocion--animated">
                Ver el producto en la tienda
              </button>
            </div>
          </div>
        </div>
        <div className="promocioness__promocion">
          <div className="promocioness__promocion-img promocioness__promocion-img--animated">
            <img src={img} alt="prueba1" />
          </div>
          <div className="promocioness__promocion-producto">
            <div className="promocioness__promocion-descripcionProducto promocioness__promocion-descripcionProducto--animated">
              <ul>
                Nombre:
                <li>Marca:</li>
                <li>Precio:</li>
                <li>En existencia:</li>
                <li>Descuento:</li>
                <li>Tipo:</li>
              </ul>
            </div>
            <div className="promocioness__promocion-irProducto">
              <button className="btn-promocion btn-promocion--primary btn-promocion--animated">
                Ver el producto en la tienda
              </button>
            </div>
          </div>
        </div>
      </div>
    </Row>
  );
};
