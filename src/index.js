import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

let store = configureStore();

import "./styles/custom.scss";

import App from "./components/App";

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("container")
);
