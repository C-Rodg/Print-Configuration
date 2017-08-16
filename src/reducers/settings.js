const INITAL_SETTINGS = {
	printerList: [],
	selectedPrinter: ""
};

const settings = (state = INITAL_SETTINGS, action) => {
	switch (action.type) {
		case "SELECT_PRINTER":
			return Object.assign(state, { selectedPrinter: action.printer });
		default:
			return state;
	}
};

export default settings;
