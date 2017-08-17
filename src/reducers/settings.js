import {
	UPDATE_PRINTER_LIST,
	UPDATE_PRINTER_LIST_ERROR,
	SELECT_PRINTER,
	GET_PRINT_SETTINGS,
	GET_PRINT_SETTINGS_ERROR,
	CONVERT_PRINT_SETTINGS_TO_XML,
	SELECT_NEW_PRINT_NODE,
	UPDATE_PAGE_MARGINS,
	UPDATE_PRINT_SETTINGS,
	UPDATE_PRINT_SETTINGS_ERROR
} from "../actions";

const INITIAL_PRINT_SETTINGS_OBJ = {
	printsettings: {
		documents: [
			{
				document: [
					{
						$: { id: "" },
						pages: [
							{
								page: [
									{
										$: { id: "" },
										margins: [
											{
												left: ["0"],
												right: ["0"]
											}
										],
										sections: [
											{
												section: [
													{
														printitems: [
															{
																printitem: [
																	{
																		$: { id: "" }
																	}
																]
															}
														]
													}
												]
											}
										]
									}
								]
							}
						]
					}
				]
			}
		]
	}
};

const INITAL_SETTINGS = {
	printerList: [],
	selectedPrinter: "",
	printSettingsXml: "",
	printSettingsObj: INITIAL_PRINT_SETTINGS_OBJ,
	currentDocument: 0,
	currentPage: 0,
	currentSection: 0,
	currentItem: 0
};

// Root Settings Reducer
const settings = (state = INITAL_SETTINGS, action) => {
	switch (action.type) {
		case SELECT_PRINTER:
			return Object.assign({}, state, { selectedPrinter: action.payload });
		case UPDATE_PRINTER_LIST:
			return Object.assign({}, state, { printerList: action.payload });
		case UPDATE_PRINTER_LIST_ERROR:
			return state;
		case GET_PRINT_SETTINGS:
			console.log("GOT PRINT SETTINGS!");
			return Object.assign({}, state, { printSettingsXml: action.payload });
		case GET_PRINT_SETTINGS_ERROR:
			return state;
		case CONVERT_PRINT_SETTINGS_TO_XML:
			console.log(action.payload);
			return Object.assign({}, state, { printSettingsObj: action.payload });
		case UPDATE_PRINT_SETTINGS:
			return state;
		case UPDATE_PRINT_SETTINGS_ERROR:
			return state;
		case UPDATE_PAGE_MARGINS:
			return Object.assign({}, state, {
				printSettingsObj: marginChangeReducer(state.printSettingsObj, action)
			});
		case SELECT_NEW_PRINT_NODE:
			return Object.assign({}, state, action.payload);
		default:
			return state;
	}
};

// Change Margin Settings reducer
const marginChangeReducer = (state = INITIAL_PRINT_SETTINGS_OBJ, action) => {
	switch (action.type) {
		case UPDATE_PAGE_MARGINS:
			let newPrintObject = Object.assign({}, state),
				pointer = newPrintObject,
				len = action.location.length - 1,
				i = 0;
			for (; i < len; i++) {
				pointer = pointer[action.location[i]];
				if (pointer.hasOwnProperty(action.location[len])) {
					pointer[action.location[len]][0] = action.value;
					break;
				}
			}
			return newPrintObject;
		default:
			return state;
	}
};

export default settings;
