/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ricefw_estimator/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
