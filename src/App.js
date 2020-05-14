import React from "react";
import { Grid } from "react-flexbox-grid2";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sucursales from "./pages/Sucursales";
import Promociones from "./pages/Promociones";
import Contacto from "./pages/Contacto";
import Login from "./pages/Login";
import "./main.scss";

function App() {
  return (
    <Router>
      <Grid className="grid">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/Sucursales" component={Sucursales} />
        <Route exact path="/Promociones" component={Promociones} />
        <Route exact path="/Contacto" component={Contacto} />
        <Route exact path="/Login" component={Login} />
        <Footer />
      </Grid>
    </Router>
  );
}

export default App;
