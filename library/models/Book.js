const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "Requires Title of Book"],
    },
    author: {
      type: String,
      require: [true, "Requires Name of Author"],
    },
    publishedYear: {
      type: Date,
    },
  },
  {
    timestampms: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);
