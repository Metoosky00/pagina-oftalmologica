import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid2";
import sprite from "./images/sprite.svg";
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
      <Row xs={12}>Main</Row>
      <Row xs={12}>footer</Row>
    </Grid>
  );
}

export default App;
