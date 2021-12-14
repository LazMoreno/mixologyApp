const { model, Schema } = require("mongoose");

const DrinkSchema = Schema({
  user_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
  },
  mixers: {
    type: [],
  },
  liquors: {
    type: [],
  },
  garnishes: {
    type: [],
  },
  steps: {
    type: [],
  },
});

module.exports = model("Drink", DrinkSchema);
