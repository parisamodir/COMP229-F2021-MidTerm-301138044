let mongoose = require("mongoose");

// create a model class
let Book = mongoose.Schema(
  {
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String,
  },
  {
    writeConcern: {
      j: true,
      wtimeout: 1000,
    },
    collection: "books",
  }
);

module.exports = mongoose.model("Book", Book);
