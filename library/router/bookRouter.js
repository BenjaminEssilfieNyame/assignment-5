const Router = require("express").Router();
const bookController = require("../controllers/bookController");

Router.get("/", bookController.getAllBooks);
Router.get("/:id", bookController.getBook);
Router.post("/", bookController.addBook);
Router.patch("/:id", bookController.updateBooks);
Router.delete("/:id", bookController.deleteBooks);

module.exports = Router;
