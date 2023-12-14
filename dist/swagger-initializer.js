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
      {url: "swaggers/inventory.json", name: "Inventory APIs"}
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
