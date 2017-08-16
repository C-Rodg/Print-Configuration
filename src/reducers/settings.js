import {
	UPDATE_PRINTER_LIST,
	UPDATE_PRINTER_LIST_ERROR,
	SELECT_PRINTER,
	GET_PRINT_SETTINGS,
	GET_PRINT_SETTINGS_ERROR,
	UPDATE_PRINT_SETTINGS,
	UPDATE_PRINT_SETTINGS_ERROR
} from "../actions";

const INITAL_SETTINGS = {
	printerList: [],
	selectedPrinter: "",
	printSettingsXml: ""
};

const settings = (state = INITAL_SETTINGS, action) => {
	switch (action.type) {
		case SELECT_PRINTER:
			return Object.assign({}, state, { selectedPrinter: action.payload });
		case UPDATE_PRINTER_LIST:
			return Object.assign({}, state, { printerList: action.payload });
		case UPDATE_PRINTER_LIST_ERROR:
			return state;
		case GET_PRINT_SETTINGS:
			return Object.assign({}, state, { printSettingsXml: action.payload });
		case GET_PRINT_SETTINGS_ERROR:
			return state;
		case UPDATE_PRINT_SETTINGS:
			return state;
		case UPDATE_PRINT_SETTINGS_ERROR:
			return state;
		default:
			return state;
	}
};

export default settings;
