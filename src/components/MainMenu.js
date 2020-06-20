import React from "react";
import { Link } from 'react-router-dom';
import "../stylesheets/MainMenu.css";

export default class MainMenu extends React.Component{
  render() {
    return(
      <div className="main_menu_container">
        <Link className="main_menu_link" to="/genre1">Genre 1</Link>
        <Link className="main_menu_link" to="/genre2">Genre 2</Link>
        <Link className="main_menu_link" to="/genre3">Genre 3</Link>
        <Link className="main_menu_link" to="/genre4">Genre 4</Link>
        <Link className="main_menu_link" to="/genre5">Genre 5</Link>
        <Link className="main_menu_link" to="/genre6">Genre 6</Link>
      </div>
    );
  }
}