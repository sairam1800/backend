var mongoose = require("mongoose");
let sale_item = new mongoose.Schema(
  {
    id: {
      type: String,
    },
    name: {
      type: String,
      // required: true,
      maxlength: 100,
    },

    number_of_items: {
      type: Number,
      default: 0,
    },
    actual_price: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: 0,
    },
    revenue: {
      type: Number,
      default: 0,
    },
    soled_price: {
      price: {
        type: Number,
        required: true,
      },
      profit: {
        type: Number,
        // required: true,
        default: 0,
      },
    },
    selling_price_range: {
      min: { type: Number },
      max: { type: Number },
    },
    soled_by: {
      id: { type: String },
      name: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("sale_item", sale_item);
