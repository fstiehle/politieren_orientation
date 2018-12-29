import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import Index from "./components/Index.jsx";
import style from './sass/style.scss';

ReactDOM.render(
  <HashRouter>
    <Index />
  </HashRouter>,
  document.getElementById("optimat"));