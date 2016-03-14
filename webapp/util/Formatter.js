jQuery.sap.declare("sap.training.util.Formatter");

sap.training.util.Formatter = {

	uppercaseFirstChar: function(sMsg) {
		return sMsg.charAt(0).toUpperCase() + sMsg.slice(1);
	}

};