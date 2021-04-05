const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/library", {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully Connected to Database!"))
  .catch((err) => console.log(err.message));
