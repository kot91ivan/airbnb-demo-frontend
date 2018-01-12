import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Homes from "./Homes";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route path="/" exact component={Main} />
          <Route path="/homes" component={Homes} />
        </div>
      </Router>
    );
  }
}

export default App;
