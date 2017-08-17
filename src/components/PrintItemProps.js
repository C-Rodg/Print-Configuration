import React from "react";

const PrintItemProps = ({
	currentDocument,
	currentPage,
	currentSection,
	currentItem,
	printSettingsObj
}) => {
	const item =
		printSettingsObj.printsettings.documents[0].document[currentDocument]
			.pages[0].page[currentPage].sections[0].section[currentSection]
			.printitems[0].printitem[currentItem];
	console.log(item);
	return <div className="print-item-props">Print Item Props</div>;
};

export default PrintItemProps;
