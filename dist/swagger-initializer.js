window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: "swagger.yaml",
    urls: [
      {url: "swaggers/enterprise.json", name: "Enterprise APIs"},
      {url: "swaggers/center.json", name: "Center APIs"},
      {url: "swaggers/product.json", name: "Product APIs"},
      {url: "swaggers/zone.json", name: "Zone APIs"},
      {url: "swaggers/subscription.json", name: "Subscription APIs"},
      {url: "swaggers/inventory.json", name: "Inventory APIs"},
      {url: "swaggers/authentication.json", name: "Login/Sign up APIs"},
      {url: "swaggers/user.json", name: "User APIs"},
      {url: "swaggers/role.json", name: "Role APIs"},
      {url: "swaggers/cart.json", name: "Cart APIs"},
      {url: "swaggers/order.json", name: "Order APIs"}
    ],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
