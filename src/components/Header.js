import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid2";
import { Link } from "react-router-dom";
import sprite from "../images/sprite.svg";

export default () => {
  return (
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
            <Link to="/" className="header__navigation-inicio">
              Inicio
            </Link>
          </Col>
          <Col xs={2}>
            <div className="header__navigation-sucursales">
              <div className="header__navigation-sucursales-group">
                <Link to="/Sucursales" className="linkSucursales">
                  Sucursales
                </Link>
                <ul>
                  <li className="header__navigation-sucursales-sucursal">
                    <Link className="link-without-decoration">Sucursal1</Link>
                  </li>
                  <li className="header__navigation-sucursales-sucursal">
                    <Link className="link-without-decoration">Sucursal2</Link>
                  </li>
                  <li className="header__navigation-sucursales-sucursal">
                    <Link className="link-without-decoration">Sucursal3</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={2}>
            <Link className="header__navigation-promociones">Promociones</Link>
          </Col>
          <Col xs={2}>
            <Link className="header__navigation-tienda">Tienda</Link>
          </Col>
          <Col xs={2}>
            <Link className="header__navigation-contacto">Contacto</Link>
          </Col>
        </Row>
      </Grid>
    </Row>
  );
};
