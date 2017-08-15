import axios from "axios";

export const getPrintSettings = () => {
	return axios.post("Services/Methods.asmx/GetPrintSettings", {});
};

export const listPrinters = () => {
	return axios.post("Services/Methods.asmx/ListPrinters", {});
};

export const updatePrintSettings = printSettings => {
	return axios.post("Services/Methods.asmx/UpdatePrintSettings", {
		printSettings
	});
};
