import React, { Component } from "react";
import { connect } from "react-redux";

import PrintItemProps from "./PrintItemProps";
import PrintPreview from "./PrintPreview";
import PrintSidebar from "./PrintSidebar";

import { updatePrinterList, selectPrinter, getPrintSettings } from "../actions";

class App extends Component {
	componentWillMount() {
		this.props.getPrintSettings();
		this.props.updatePrinterList();
	}

	render() {
		return (
			<div className="app">
				<PrintSidebar
					printerList={this.props.printerList}
					handleSelectPrinter={this.props.selectPrinter}
					selectedPrinter={this.props.selectedPrinter}
				/>
				<div className="right-col">
					<PrintPreview />
					<PrintItemProps />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { printerList, selectedPrinter } = state.settings;
	return {
		printerList,
		selectedPrinter
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getPrintSettings: () => dispatch(getPrintSettings()),
		updatePrinterList: () => dispatch(updatePrinterList()),
		selectPrinter: printer => dispatch(selectPrinter(printer))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
