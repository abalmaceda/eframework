/**
 * Reaction App Router
 * Define general app routing.
 * EFrameworkCore common/routing.js contains the core routes.
 */
/* TODO */ 
let staticPages = ["about", "team", "faqs", "terms", "privacy" ];

/**
 * app router mapping
 */
 /* TODO */ 
Router.map(function route() {
  for (let page of staticPages) {
    this.route(page, {
      controller: ShopController,
      name: page
    });
  }
  return this.route("notFound", {
    path: "/(.*)"
  });
});
