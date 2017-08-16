import axios from "axios";

export const UPDATE_PRINTER_LIST = "UPDATE_PRINTER_LIST";
export const UPDATE_PRINTER_LIST_ERROR = "UPDATE_PRINTER_LIST_ERROR";

export const SELECT_PRINTER = "SELECT_PRINTER";

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

export function selectPrinter(printer) {
	return {
		type: SELECT_PRINTER,
		payload: printer
	};
}
