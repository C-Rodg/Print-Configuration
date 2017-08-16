import React from "react";

const PrintSidebar = ({
	printerList,
	handleSelectPrinter,
	selectedPrinter
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
						{printerList &&
							printerList.map(printer =>
								<option value={printer} key={printer}>
									{printer}
								</option>
							)}
					</select>
				</div>
				<div className="printer-document">
					<label>Document:</label>
					<select />
				</div>
				<div className="printer-page">
					<label>Page:</label>
					<select />
				</div>
				<div className="printer-page-margin">
					<label>Left:</label>
					<input type="text" />
					<label>Right</label>
					<input type="text" />
				</div>
				<div className="printer-section">
					<label>Section:</label>
					<select />
				</div>
				<div className="printer-item">
					<label>Print Item:</label>
					<select />
				</div>
			</div>
		</div>
	);
};

export default PrintSidebar;
