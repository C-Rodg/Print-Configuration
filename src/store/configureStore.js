import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import printConfigApp from "../reducers";

const configureStore = initialState => {
	return createStore(printConfigApp, initialState, applyMiddleware(thunk));
};

export default configureStore;
