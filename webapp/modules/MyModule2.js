sap.ui.define(["sap/m/MessageBox", "sap/ui/core/format/DateFormat"], function (MessageBox, DateFormat) {
	"use strict";

	return {
		displayDate: function (oDate) {
			var oDateInstance = DateFormat.getDateInstance();
			var sDate = oDateInstance.format(oDate);
			MessageBox.show(sDate, {
				title: "Date"
			});
		}
	};

});