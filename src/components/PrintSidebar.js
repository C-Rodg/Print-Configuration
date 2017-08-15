import React, { Component } from "react";
import { Header } from "semantic-ui-react";

class PrintSidebar extends Component {
	render() {
		return (
			<div className="print-sidebar">
				<Header size="medium">Print Settings</Header>
				<div className="sidebar-content">
					<div className="printer-list">PRINTER LIST HERE...</div>
				</div>
			</div>
		);
	}
}

export default PrintSidebar;
