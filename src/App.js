import React from "react";
import { Grid } from "react-flexbox-grid2";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sucursales from "./pages/Sucursales";
import "./main.scss";

function App() {
  return (
    <Router>
      <Grid className="grid">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/Sucursales" component={Sucursales} />
        <Footer />
      </Grid>
    </Router>
  );
}

export default App;
