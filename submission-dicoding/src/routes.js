const { addBookHandler } = require("./handler");
const { bookSchema } = require("./schema");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
];

module.exports = routes;
