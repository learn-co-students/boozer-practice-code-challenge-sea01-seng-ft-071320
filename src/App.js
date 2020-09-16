import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CocktailsContainer from "./components/CocktailsContainer";

const ENDPOINT = "https://react-boozer-backend.herokuapp.com/api/v1/";

class App extends Component {
  state = {
    cocktails: [],
  };

  componentDidMount() {
    fetch(`${ENDPOINT}/cocktails`)
      .then((resp) => resp.json())
      .then((cocktails) => this.setState({ cocktails: cocktails }));
  }

  render() {
    return <CocktailsContainer cocktails={this.state.cocktails} />;
  }
}

export default App;
