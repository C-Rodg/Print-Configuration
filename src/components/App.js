import React, { Component } from "react";
import { connect } from "react-redux";

import PrintItemProps from "./PrintItemProps";
import PrintPreview from "./PrintPreview";
import PrintSidebar from "./PrintSidebar";

import {
	updatePrinterList,
	selectPrinter,
	getPrintSettings,
	selectNewPrintNode,
	updatePageMargins
} from "../actions";

class App extends Component {
	componentWillMount() {
		this.props.getPrintSettings();
		this.props.updatePrinterList();
	}

	// Margins changed - create path to margins and update value
	handleMarginChanges = (side, val) => {
		const { currentDocument, currentPage, updatePageMargins } = this.props;
		const locationArray = [
			"printsettings",
			"documents",
			"0",
			"document",
			currentDocument,
			"pages",
			"0",
			"page",
			currentPage,
			"margins",
			"0",
			side
		];
		updatePageMargins(locationArray, val);
	};

	render() {
		const {
			printerList,
			selectedPrinter,
			selectPrinter,
			currentDocument,
			currentPage,
			currentSection,
			currentItem,
			printSettingsObj,
			selectNewPrintNode
		} = this.props;
		return (
			<div className="app">
				<PrintSidebar
					printerList={printerList}
					handleSelectPrinter={selectPrinter}
					selectedPrinter={selectedPrinter}
					currentDocument={currentDocument}
					currentPage={currentPage}
					currentSection={currentSection}
					currentItem={currentItem}
					printSettingsObj={printSettingsObj}
					handleSelectNewPrintNode={selectNewPrintNode}
					handleMarginChanges={this.handleMarginChanges}
				/>
				<div className="right-col">
					<PrintPreview />
					<PrintItemProps
						currentDocument={currentDocument}
						currentPage={currentPage}
						currentSection={currentSection}
						currentItem={currentItem}
						printSettingsObj={printSettingsObj}
					/>
				</div>
			</div>
		);
	}
}

// Incoming properties from state
const mapStateToProps = state => {
	const {
		printerList,
		selectedPrinter,
		printSettingsObj,
		currentDocument,
		currentPage,
		currentSection,
		currentItem
	} = state.settings;
	return {
		printerList,
		selectedPrinter,
		printSettingsObj,
		currentDocument,
		currentPage,
		currentSection,
		currentItem
	};
};

// Outgoing Events
const mapDispatchToProps = dispatch => {
	return {
		getPrintSettings: () => dispatch(getPrintSettings()),
		updatePrinterList: () => dispatch(updatePrinterList()),
		selectPrinter: printer => dispatch(selectPrinter(printer)),
		selectNewPrintNode: (type, idx) => dispatch(selectNewPrintNode(type, idx)),
		updatePageMargins: (loc, val) => dispatch(updatePageMargins(loc, val))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
