/*
 * Demo module
 */

// declaration of the module
jQuery.sap.declare("sap.training.modules.MyModule1");

// list of dependencies of this module
jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.ui.core.format.DateFormat");

// create the 'main' object of the module
sap.training.modules.MyModule1 = {};

sap.training.modules.MyModule1.displayDate = function(oDate) {
	var oDateInstance = sap.ui.core.format.DateFormat.getDateInstance();
	var sDate = oDateInstance.format(oDate);
	sap.m.MessageBox.show(sDate, {
		title: "Date"
	});
};

