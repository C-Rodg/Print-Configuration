import React from "react";

const PrintSidebar = ({
	printerList,
	handleSelectPrinter,
	selectedPrinter,
	printSettingsObj,
	currentDocument,
	currentPage,
	currentSection,
	currentItem,
	handleSelectNewPrintNode,
	handleMarginChanges
}) => {
	return (
		<div className="print-sidebar">
			<div className="sidebar-title">Print Settings</div>
			<div className="sidebar-content">
				<div className="printer-list">
					<label>Select a Printer:</label>
					<select
						onChange={ev => handleSelectPrinter(ev.target.value)}
						value={selectedPrinter}
					>
						<option value="" />
						{printerList.map(printer =>
							<option value={printer} key={printer}>
								{printer}
							</option>
						)}
					</select>
				</div>
				<div className="printer-document">
					<label>Document:</label>
					<select
						onChange={ev =>
							handleSelectNewPrintNode("document", ev.target.value)}
					>
						{renderSelectWithId(
							printSettingsObj.printsettings.documents[0].document
						)}
					</select>
				</div>
				<div className="printer-page">
					<label>Page:</label>
					<select
						onChange={ev => handleSelectNewPrintNode("page", ev.target.value)}
					>
						{renderSelectWithId(
							printSettingsObj.printsettings.documents[0].document[
								currentDocument
							].pages[0].page
						)}
					</select>
				</div>
				<div className="printer-page-margin">
					<label>Left:</label>
					<input
						type="text"
						value={
							printSettingsObj.printsettings.documents[0].document[
								currentDocument
							].pages[0].page[currentPage].margins[0].left[0]
						}
						onChange={ev => handleMarginChanges("left", ev.target.value)}
					/>
					<label>Right</label>
					<input
						type="text"
						value={
							printSettingsObj.printsettings.documents[0].document[
								currentDocument
							].pages[0].page[currentPage].margins[0].right[0]
						}
						onChange={ev => handleMarginChanges("right", ev.target.value)}
					/>
				</div>
				<div className="printer-section">
					<label>Section:</label>
					<select
						onChange={ev =>
							handleSelectNewPrintNode("section", ev.target.value)}
					>
						{renderSections(
							printSettingsObj.printsettings.documents[0].document[
								currentDocument
							].pages[0].page[currentPage].sections[0].section
						)}
					</select>
				</div>
				<div className="printer-item">
					<label>Print Item:</label>
					<select
						onChange={ev => handleSelectNewPrintNode("item", ev.target.value)}
					>
						{renderSelectWithId(
							printSettingsObj.printsettings.documents[0].document[
								currentDocument
							].pages[0].page[currentPage].sections[0].section[currentSection]
								.printitems[0].printitem
						)}
					</select>
				</div>
			</div>
		</div>
	);
};

const renderSections = opts => {
	return opts.map((item, idx) => {
		return (
			<option value={idx} key={idx}>
				Section {idx + 1}
			</option>
		);
	});
};

const renderSelectWithId = opts => {
	return opts.map((item, idx) => {
		return (
			<option value={idx} key={idx}>
				{item.$.id}
			</option>
		);
	});
};

export default PrintSidebar;
