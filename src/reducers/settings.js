import { UPDATE_PRINTER_LIST, UPDATE_PRINTER_LIST_ERROR } from "../actions";

const INITAL_SETTINGS = {
	printerList: [],
	selectedPrinter: ""
};

const settings = (state = INITAL_SETTINGS, action) => {
	switch (action.type) {
		case "SELECT_PRINTER":
			return Object.assign({}, state, { selectedPrinter: action.payload });
		case UPDATE_PRINTER_LIST:
			return Object.assign({}, state, { printerList: action.payload });
		case UPDATE_PRINTER_LIST_ERROR:
			return state;
		default:
			return state;
	}
};

export default settings;
