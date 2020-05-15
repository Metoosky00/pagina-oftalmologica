import React from "react";
import { Row } from "react-flexbox-grid2";

export default () => {
  return (
    <Row xs={12} className="main">
      <div className="createAcountContainer">
        <div className="createAcount">
          <form className="createAcount__form">
            <div className="createAcount__group">
              <h2 className="createAcount__titulo">Crea tu cuenta</h2>
            </div>
            <div className="createAcount__group">
              <label htmlFor="nombre" className="createAcount__label">
                Nombre:
              </label>
              <input
                type="text"
                className="createAcount__input"
                id="nombre"
                required
              />
              <span className="createAcount__span">&#42;</span>
            </div>
            <div className="createAcount__group">
              <label htmlFor="apellido" className="createAcount__label">
                Apellidos:
              </label>
              <input
                type="text"
                className="createAcount__input"
                id="apellido"
                required
              />
              <span className="createAcount__span">&#42;</span>
            </div>
            <div className="createAcount__group">
              <label htmlFor="email" className="createAcount__label">
                Correo:
              </label>
              <input
                type="email"
                className="createAcount__input"
                id="email"
                required
              />
              <span className="createAcount__span">&#42;</span>
            </div>
            <div className="createAcount__group">
              <label htmlFor="password" className="createAcount__label">
                Contraseña:
              </label>
              <input
                type="password"
                className="createAcount__input"
                id="password"
                required
              />
              <span className="createAcount__span">&#42;</span>
            </div>
            <div className="createAcount__group">
              <label htmlFor="passwordRepite" className="createAcount__label">
                Repite tu contraseña:
              </label>
              <input
                type="password"
                className="createAcount__input"
                id="passwordRepite"
                required
              />
              <span className="createAcount__span">&#42;</span>
            </div>
            <div className="createAcount__group">
              <button className="createAcount__btn">
                Crear cuenta
                <span className="createAcount__btn-span">&rarr;</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Row>
  );
};
