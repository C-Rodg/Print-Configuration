import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";

import "semantic-ui-css/semantic.min.css";
//import './styles/custom.scss';

import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("container"));
