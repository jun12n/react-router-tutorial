import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import MainMenu from "./MainMenu";
import MainContents from "./MainContents";
import "../stylesheets/Main.css";

export default class Main extends React.Component{
  render() {
    return(
      <main className="App_main">
        <Router>
          <MainMenu />
          <MainContents />
        </Router>
      </main>
    )
  }
}