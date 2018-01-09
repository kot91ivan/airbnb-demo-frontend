import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Homes from "./Homes";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Main} />
          <Route path="/homes" component={Homes} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
