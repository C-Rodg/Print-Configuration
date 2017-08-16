import React, { Component } from "react";

const opts = [
	{
		value: "test1",
		label: "Preview Printer 1"
	},
	{ value: "test2", label: "Test Printer" }
];
class PrintSidebar extends Component {
	constructor() {
		super();

		this.state = {
			printerList: [],
			selectedPrinter: ""
		};
	}

	render() {
		return (
			<div className="print-sidebar">
				<div className="sidebar-title">Print Settings</div>
				<div className="sidebar-content">
					<div className="printer-list" />
				</div>
			</div>
		);
	}
}

export default PrintSidebar;
