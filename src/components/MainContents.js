import React from "react";
import {Route} from "react-router-dom";
import Genre1 from "./genres/Genre1";
import Genre2 from "./genres/Genre2";
import Genre3 from "./genres/Genre3";
import Genre4 from "./genres/Genre4";
import Genre5 from "./genres/Genre5";
import Genre6 from "./genres/Genre6";
import "../stylesheets/MainContents.css";

export default class MainContents extends React.Component{
  render() {
    return(
      <div className="main_contents_container">
        <Route exact path='/genre1' component={Genre1} />
        <Route exact path='/genre2' component={Genre2} />
        <Route exact path='/genre3' component={Genre3} />
        <Route exact path='/genre4' component={Genre4} />
        <Route exact path='/genre5' component={Genre5} />
        <Route exact path='/genre6' component={Genre6} />
      </div>
    )
  }
}