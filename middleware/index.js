const header = require("./header.middleware");
require("./response.middleware");

const middleware = (app) => {
  app.use(header);
};

module.exports = middleware;
