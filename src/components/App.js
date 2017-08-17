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
		const {
			printerList,
			selectedPrinter,
			selectPrinter,
			currentDocument,
			currentPage,
			currentSection,
			currentItem,
			printSettingsObj
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

const mapDispatchToProps = dispatch => {
	return {
		getPrintSettings: () => dispatch(getPrintSettings()),
		updatePrinterList: () => dispatch(updatePrinterList()),
		selectPrinter: printer => dispatch(selectPrinter(printer))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
