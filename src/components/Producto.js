import React from "react";
import img from "../images/header-image.jpg";

export default () => {
  return (
    <div className="producto">
      <div className="producto__group">
        <img src={img} alt="prueba" className="producto__image" />
      </div>
      <div className="producto__group">
        <label className="producto__label">
          Carrera Lente Oftálmico Negro 104V
        </label>
        <label className="producto__label">$3,599.00</label>
      </div>
      <div className="producto__group">
        <button className="producto__btn">Agregar a carrito</button>
      </div>
    </div>
  );
};
