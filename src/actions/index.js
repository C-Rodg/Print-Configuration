import axios from "axios";
import { parseString, Builder } from "xml2js";

export const UPDATE_PRINTER_LIST = "UPDATE_PRINTER_LIST";
export const UPDATE_PRINTER_LIST_ERROR = "UPDATE_PRINTER_LIST_ERROR";

export const SELECT_PRINTER = "SELECT_PRINTER";

export const GET_PRINT_SETTINGS = "GET_PRINT_SETTINGS";
export const GET_PRINT_SETTINGS_ERROR = "GET_PRINT_SETTINGS_ERROR";
export const CONVERT_PRINT_SETTINGS_TO_XML = "CONVERT_PRINT_SETTINGS_TO_XML";

export const SELECT_NEW_PRINT_NODE = "SELECT_NEW_PRINT_NODE";
export const UPDATE_PAGE_MARGINS = "UPDATE_PAGE_MARGINS";

export const UPDATE_PRINT_SETTINGS = "UPDATE_PRINT_SETTINGS";
export const UPDATE_PRINT_SETTINGS_ERROR = "UPDATE_PRINT_SETTINGS_ERROR";

// List Printers
export function updatePrinterList() {
	return dispatch => {
		axios
			.post("Services/Methods.asmx/ListPrinters", {})
			.then(resp => {
				dispatch({
					type: UPDATE_PRINTER_LIST,
					payload: resp.data.d.Printers
				});
			})
			.catch(err => {
				dispatch({
					type: UPDATE_PRINTER_LIST_ERROR
				});
			});
	};
}

// Select a printer
export function selectPrinter(printer) {
	return {
		type: SELECT_PRINTER,
		payload: printer
	};
}

// Get Print Settings
export function getPrintSettings() {
	return dispatch => {
		axios
			.post("Services/Methods.asmx/GetPrintSettings", {})
			.then(resp => {
				dispatch({
					type: GET_PRINT_SETTINGS,
					payload: resp.data.d.PrintSettings
				});
				return resp;
			})
			.then(resp => {
				return parseString(resp.data.d.PrintSettings, (err, result) => {
					dispatch({
						type: CONVERT_PRINT_SETTINGS_TO_XML,
						payload: result
					});
				});
			})
			.catch(err => {
				dispatch({
					type: GET_PRINT_SETTINGS_ERROR
				});
			});
	};
}

// Update Print Settings
export function updatePrintSettings(printSettings) {
	return dispatch => {
		axios
			.post("Services/Methods.asmx/UpdatePrintSettings", { printSettings })
			.then(resp => {
				dispatch({
					type: UPDATE_PRINT_SETTINGS
				});
			})
			.catch(err => {
				dispatch({
					type: UPDATE_PRINT_SETTINGS_ERROR
				});
			});
	};
}

// Generate a badge
export function generateBadge() {
	return dispatch => {
		axios
			.post("Services/Methods.asmx/PrintBadge", printerObj)
			.then(resp => {
				// Do what...
			})
			.catch(err => {
				///...
			});
	};
}

// SAMPLE printerObj
// {
// 	attendeeGuid: null,
// 	documentId: 'badge',
// 	markPrinted: false,
// 	printDocument: '<print></print>',
// 	printSettingsXml: null,
// 	printToImage: true,
// 	printerName: 'Preview Printer',
// 	registrantDocument: null
// }

// Select new print node - document, page, section, item
export function selectNewPrintNode(type, idx) {
	const idxObj = {};
	if (type === "document") {
		idxObj.currentDocument = idx;
		idxObj.currentPage = 0;
		idxObj.currentSection = 0;
		idxObj.currentItem = 0;
	} else if (type === "page") {
		idxObj.currentPage = idx;
		idxObj.currentSection = 0;
		idxObj.currentItem = 0;
	} else if (type === "section") {
		idxObj.currentSection = idx;
		idxObj.currentItem = 0;
	} else if (type === "item") {
		idxObj.currentItem = idx;
	}
	return {
		type: SELECT_NEW_PRINT_NODE,
		payload: idxObj
	};
}

// Update page margins
export function updatePageMargins(location, value) {
	return {
		type: UPDATE_PAGE_MARGINS,
		location,
		value
	};
}
