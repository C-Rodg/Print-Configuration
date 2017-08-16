import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";

import "./styles/custom.scss";

import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("container"));
