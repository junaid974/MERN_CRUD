const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
  },
  instructions: {
    type: String,
  },
  category: {
    type: String,
  },
});

module.exports = mongoose.model("Recipe", recipeSchema);
