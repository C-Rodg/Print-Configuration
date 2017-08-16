import React, { Component } from "react";
import { connect } from "react-redux";

import { updatePrinterList, selectPrinter } from "../actions";

class PrintSidebar extends Component {
	componentWillMount() {
		this.props.updatePrinterList();
	}

	// Render Printer List
	renderPrinters(printers) {
		let opts = [<option value="" key="NO-VALUE" />];
		if (printers) {
			printers.forEach(printer => {
				opts.push(
					<option value={printer} key={printer}>
						{printer}
					</option>
				);
			});
		}
		return opts;
	}

	render() {
		return (
			<div className="print-sidebar">
				<div className="sidebar-title">Print Settings</div>
				<div className="sidebar-content">
					<div className="printer-list">
						<label>Select a Printer:</label>
						<select onChange={ev => this.props.selectPrinter(ev.target.value)}>
							{this.renderPrinters(this.props.printerList)}
						</select>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		printerList: state.settings.printerList
	};
};

const mapDispatchToProps = dispatch => {
	return {
		updatePrinterList: () => dispatch(updatePrinterList()),
		selectPrinter: printer => dispatch(selectPrinter(printer))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PrintSidebar);
