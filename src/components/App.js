import React from "react";

import { Button } from "semantic-ui-react";

import PrintItemProps from "./PrintItemProps";
import PrintPreview from "./PrintPreview";
import PrintSidebar from "./PrintSidebar";

const App = () => {
	return (
		<div className="app">
			<PrintSidebar />
			<div className="right-col">
				<PrintPreview />
				<PrintItemProps />
				<Button secondary>Secondaryyy</Button>
			</div>
		</div>
	);
};

export default App;
