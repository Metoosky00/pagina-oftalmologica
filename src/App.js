import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid2";
import sprite from "./images/sprite.svg";
import imagen from "./images/header-image.jpg";
import "./main.scss";

function App() {
  return (
    <Grid className="grid">
      <Row xs={12} className="row">
        <Grid className="header">
          <Row xs={12} className="header__login">
            <Col xs={3} className="header__logo">
              Enfocate
            </Col>
            <Col xs={9} className="header__log">
              <div className="header__group">
                <div className="header__group-1">
                  <svg className="header__icon">
                    <use xlinkHref={`${sprite}#icon-add-user`}></use>
                  </svg>
                  <button className="btn btn-create">Crear cuenta</button>
                </div>
                <div className="header__group-2">
                  <svg className="header__icon">
                    <use xlinkHref={`${sprite}#icon-user`}></use>
                  </svg>
                  <button className="btn btn-login">Iniciar Sesión</button>
                </div>
              </div>
            </Col>
          </Row>
          <Row xs={12} className="header__navigation">
            <Col xs={2}>
              <a href="" className="header__navigation-inicio">
                Inicio
              </a>
            </Col>
            <Col xs={2}>
              <div className="header__navigation-sucursales">
                <span className="header__navigation-sucursales-span">
                  Sucursales
                </span>
                <ul>
                  <li className="header__navigation-sucursales-sucursal">
                    Sucursal1
                  </li>
                  <li className="header__navigation-sucursales-sucursal">
                    Sucursal2
                  </li>
                  <li className="header__navigation-sucursales-sucursal">
                    Sucursal3
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={2}>
              <a href="" className="header__navigation-promociones">
                Promociones
              </a>
            </Col>
            <Col xs={2}>
              <a href="" className="header__navigation-tienda">
                Tienda
              </a>
            </Col>
            <Col xs={2}>
              <a href="" className="header__navigation-contacto">
                Contacto
              </a>
            </Col>
          </Row>
        </Grid>
      </Row>
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
      <Row xs={12} className="footer">
        <div className="privacity">
          <span>
            &copy; todos los derechos reservados esta es una obra de prueba
            creada por Jose Eduardo Malfavon Talavera y es solo con fines
            educativos{" "}
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
    </Grid>
  );
}

export default App;
