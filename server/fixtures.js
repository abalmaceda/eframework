/**
 * E-Framework startup
 *
 * Cargar app privates fixtures
 */

Meteor.startup(function () {
	try {
		return Fixtures.loadSettings(Assets.getText("settings/eFramework.json"));
	} catch (error) {
		EFrameworkCore.Log.debug("loadSettings eFramework.json not loaded.", error);
	}
});
