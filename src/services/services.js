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

export const generateBadge = printerObj => {
	return axios.post("Services/Methods.asmx/PrintBadge", printerObj);
};

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
