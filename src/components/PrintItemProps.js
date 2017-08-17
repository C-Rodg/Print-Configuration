import React from "react";

import PropertyText from "./PropertyText";
import PropertyQRcode from "./PropertyQRcode";
import PropertyImage from "./PropertyImage";
import PropertyAgenda from "./PropertyAgenda";
import PropertyShape from "./PropertyShape";

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
	return (
		<div className="print-item-props">
			<div className="item-title">
				Print Item: {item.$.id}
			</div>
			<div className="item-wrapper">
				{determineItemType(item)}
			</div>
		</div>
	);
};

// Determine Print Item type
const determineItemType = item => {
	if (item.qrcode && item.qrcode[0].toUpperCase() === "YES") {
		return <PropertyQRcode item={item} />;
	} else if (item.agenda && item.agenda[0].toUpperCase() === "YES") {
		return <PropertyAgenda item={item} />;
	} else if (item.image && item.image[0].toUpperCase() === "YES") {
		return <PropertyImage item={item} />;
	} else if (item.graphic && item.graphic[0]) {
		return <PropertyShape item={item} />;
	} else {
		return <PropertyText />;
	}
};

export default PrintItemProps;
