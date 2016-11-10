/**
 * Misc. App. Configuration
 *
 * A place to put misc. package configurations
 */
 /*TODO*/




 /**
  * @summary Configuración del package Avatar
  * @description Helpers para Template.templateName
  * @see {@link  https://atmospherejs.com/utilities/avatar|ATMOSPHERE}
  */
Avatar.setOptions({
	/*URL acatar de user guest */
	defaultImageUrl: "../public/social.png",
	fallbackType: "image",
	cssClassPrefix: "reactionAvatar"
});
// client configuration
if (Meteor.isClient) {
	ITEMS_INCREMENT = 10;
	// sets default number of product displayed on a grid
	Session.setDefault("productScrollLimit", ITEMS_INCREMENT);
}
