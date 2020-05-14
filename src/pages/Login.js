import React from "react";
import { Row } from "react-flexbox-grid2";

export default () => {
  return (
    <Row xs={12} className="main">
      <div className="loginContainer">
        <div className="login">
          <form className="login__form">
            <div className="loginGroup">
              <h2 className="loginGroup__titulo">Iniciar Sesion</h2>
            </div>
            <div className="loginGroup">
              <label htmlFor="email" className="loginGroup__label">
                Correo electronico:
              </label>
              <input
                type="email"
                className="loginGroup__input"
                id="email"
                required
              />
            </div>
            <div className="loginGroup">
              <label htmlFor="password" className="loginGroup__label">
                Contraseña:
              </label>
              <input
                type="password"
                className="loginGroup__input"
                id="password"
                required
              />
            </div>
            <div className="loginGroup">
              <button className="loginGroup__btn-login">Iniciar Sesion</button>
            </div>
          </form>
          <div className="loginLogo">
            <h2 className="loginLogo__logo">Enfocate</h2>
          </div>
        </div>
      </div>
    </Row>
  );
};
