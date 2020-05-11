import React from "react";
import { Row } from "react-flexbox-grid2";
import hamburgo from "../images/hamburgo.jpg";

export default () => {
  return (
    <Row xs={12} className="main">
      <div className="sucursales-page">
        <div className="sucursales__sucursal">
          <div className="sucursales__sucursal-1">
            <div className="sucursales__sucursal-img">
              <img src={hamburgo} alt="hamburgo" />
            </div>
            <div className="sucursales__sucursal-description">
              <p>Estamos hubicados Hamburgo 115,</p>
              <p>Juárez, Cuauhtémoc, 06600 Juárez, CDMX</p>
              <p>Puede llemar a los numeros:</p>
              <p>Tel: 55 4163 6969</p>
              <p>En un horario de las 8:00 a las 17:00 hr</p>
              <p>De luneas a viernes</p>
            </div>
          </div>
          <div className="sucursales__sucursal-2"></div>
          <div className="sucursales__sucursal-3"></div>
        </div>
      </div>
    </Row>
  );
};
