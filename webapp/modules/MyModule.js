sap.ui.define(["sap/training/util/Formatter", "sap/m/MessageToast"], function(Formatter, MessageToast) {
	"use strict";

	return {
		showMessage: function(sMsg) {
			var sTxt = Formatter.uppercaseFirstChar(sMsg);
			MessageToast.show(sTxt);
		}
	};
	
});