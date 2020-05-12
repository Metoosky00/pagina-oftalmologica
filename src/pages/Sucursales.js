import React from "react";
import { Row } from "react-flexbox-grid2";
import hamburgo from "../images/hamburgo.jpg";
import losReyes from "../images/los-reyes.jpg";
import obregon from "../images/obregon.jpg";

export default () => {
  return (
    <Row xs={12} className="main">
      <div className="sucursales-page">
        <div className="sucursales__sucursal">
          <div className="sucursales__sucursal-1">
            <div className="sucursales__sucursal-img-1">
              <img src={hamburgo} alt="hamburgo" />
            </div>
            <div className="sucursales__sucursal-description-1">
              <p>Estamos hubicados Hamburgo 115,</p>
              <p>Juárez, Cuauhtémoc, 06600 Juárez, CDMX</p>
              <p>Puede llemar a los numeros:</p>
              <p>Tel: 55 4163 6969</p>
              <p>En un horario de las 8:00 a las 17:00 hr</p>
              <p>De luneas a viernes</p>
            </div>
          </div>
          <div className="sucursales__sucursal-2">
            <div className="sucursales__sucursal-img-2">
              <img src={losReyes} alt="los-reyes-la-paz" />
            </div>
            <div className="sucursales__sucursal-description-2">
              <p>Estamos hubicados Hamburgo 115,</p>
              <p>Juárez, Cuauhtémoc, 06600 Juárez, CDMX</p>
              <p>Puede llemar a los numeros:</p>
              <p>Tel: 55 4163 6969</p>
              <p>En un horario de las 8:00 a las 17:00 hr</p>
              <p>De luneas a viernes</p>
            </div>
          </div>
          <div className="sucursales__sucursal-3">
            <div className="sucursales__sucursal-img-3">
              <img src={obregon} alt="obregon" />
            </div>
            <div className="sucursales__sucursal-description-3">
              <p>Estamos hubicados Hamburgo 115,</p>
              <p>Juárez, Cuauhtémoc, 06600 Juárez, CDMX</p>
              <p>Puede llemar a los numeros:</p>
              <p>Tel: 55 4163 6969</p>
              <p>En un horario de las 8:00 a las 17:00 hr</p>
              <p>De luneas a viernes</p>
            </div>
          </div>
        </div>
      </div>
    </Row>
  );
};
