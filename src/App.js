import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid2";
import "./main.scss";

function App() {
  return (
    <Grid className="grid">
      <Row xs={12} className="row">
        <div className="header">
          <div className="header__login">login</div>
          <div className="header__navigation">navegacion</div>
        </div>
      </Row>
      <Row xs={12}>Main</Row>
      <Row xs={12}>footer</Row>
    </Grid>
  );
}

export default App;
