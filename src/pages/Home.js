import React from 'react'
import { Grid, Row, Col } from "react-flexbox-grid2";
import imagen from "../images/header-image.jpg";

export default ()=>{
    return(
        <Row xs={12} className="main">
        <Grid className="news">
          <Row xs={12} className="news__promocion">
            <div className="heading-container">
              <h2 className="heading-2">Promociones</h2>
            </div>
            <div className="promociones">
              <div className="promociones__promocion">
                <img src={imagen} alt="" className="promociones-image" />
                <div className="promociones-description">
                  <h2 className="heading-3">Armazones GUESS</h2>
                  <ul className="promociones-desciption-beneficios">
                    En la compra de este producto puede tener los siguientes
                    veneficios
                    <li>Las micas son totalmente gratis</li>
                    <li>Puede escojer el color de sus armazones</li>
                    <li>
                      El diseño de la mica oftalmologica es al gusto del usuario
                    </li>
                    <li>El costo de mas de 3 productos tendra descuento</li>
                  </ul>
                </div>
              </div>
              <div className="promociones__promocion">
                <img src={imagen} alt="" className="promociones-image" />
                <div className="promociones-description">
                  <h2 className="heading-3">Armazones VIATORY</h2>
                  <ul className="promociones-desciption-beneficios">
                    En la compra de este producto puede tener los siguientes
                    veneficios
                    <li>Las micas son totalmente gratis</li>
                    <li>Puede escojer el color de sus armazones</li>
                    <li>
                      El diseño de la mica oftalmologica es al gusto del usuario
                    </li>
                    <li>El costo de mas de 3 productos tendra descuento</li>
                  </ul>
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <Col sm={12} lg={6} className="news__sucursales">
              <ul className="sucursales">
                Lo estaremos esperando en cualquier de nuestras sucursales
                <li>Chimalhuacan</li>
                <li>Los reyes la paz</li>
                <li>Texcoco</li>
                <li>Alvaro Obregon</li>
              </ul>
            </Col>
            <Col sm={12} lg={6} className="news__recomendaciones">
              <div className="recomendaciones">
                <p>
                  Antes que todo estan nuestros clientes por lo que le sugerimos
                  que en esta epoca de control sanitario contacte con nosotros y
                  con gusto le daremos informacion a partir de cualquiera de
                  nuestras redes sociales.
                </p>
                <p>
                  Por otro lado recuerde siempre labar sus manos, no tocarse la
                  boca o los ojos con las manos y usar en todo momento
                  cubrebocas.
                </p>
                <p>Gracias por su preferencias!!</p>
              </div>
            </Col>
          </Row>
        </Grid>
      </Row>
    )
}