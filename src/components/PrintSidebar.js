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
				<div className="printer-list side-item">
					<label htmlFor="side-label-printer">Select a Printer:</label>
					<select
						id="side-label-printer"
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
				<div className="printer-document side-item">
					<label htmlFor="side-label-document">Document:</label>
					<select
						id="side-label-document"
						onChange={ev =>
							handleSelectNewPrintNode("document", ev.target.value)}
					>
						{renderSelectWithId(
							printSettingsObj.printsettings.documents[0].document
						)}
					</select>
				</div>
				<div className="printer-page side-item">
					<label htmlFor="side-label-page">Page:</label>
					<select
						id="side-label-page"
						onChange={ev => handleSelectNewPrintNode("page", ev.target.value)}
					>
						{renderSelectWithId(
							printSettingsObj.printsettings.documents[0].document[
								currentDocument
							].pages[0].page
						)}
					</select>
				</div>
				<div className="printer-page-margin side-item">
					<label htmlFor="side-label-margin-left">Left Margin:</label>
					<input
						id="side-label-margin-left"
						type="number"
						min="0"
						value={
							printSettingsObj.printsettings.documents[0].document[
								currentDocument
							].pages[0].page[currentPage].margins[0].left[0]
						}
						onChange={ev => handleMarginChanges("left", ev.target.value)}
					/>
				</div>
				<div className="printer-page-margin side-item">
					<label htmlFor="side-label-margin-right">Right Margin:</label>
					<input
						id="side-label-margin-right"
						type="number"
						min="0"
						value={
							printSettingsObj.printsettings.documents[0].document[
								currentDocument
							].pages[0].page[currentPage].margins[0].right[0]
						}
						onChange={ev => handleMarginChanges("right", ev.target.value)}
					/>
				</div>
				<div className="printer-section side-item">
					<label htmlFor="side-label-section">Section:</label>
					<select
						id="side-label-section"
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
				<div className="printer-item side-item">
					<label htmlFor="side-label-printer-item">Print Item:</label>
					<select
						id="side-label-printer-item"
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
