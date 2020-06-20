import React from "react";
import "../stylesheets/Header.css";
import header_img from "../images/logo192.png";

export default class Header extends React.Component{
  render() {
    return(
      <header className="App_header">
        <img className="header_img" src={header_img} alt="Img"/>
        <h1 className="header_title">React Router Tutorial</h1>
      </header>
    );
  }
}