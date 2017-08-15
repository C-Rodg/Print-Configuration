import React from "react";

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
			</div>
		</div>
	);
};

export default App;
