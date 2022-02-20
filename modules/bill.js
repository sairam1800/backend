var mongoose = require("mongoose");
let bill = new mongoose.Schema(
  {
    soled_by_id: { type: String },
    soled_by_name: { type: String },

    total_products: { type: Number, required: true, default: 0 },
    total_items: { type: Number, required: true, default: 0 },
    list: [
      {
        id: { type: String, required: true },
        name: { type: String, required: true },
        soled_price: { type: Number, required: true },
        min: { type: Number, required: true },
        max: { type: Number, required: true },
        no_of_items: { type: Number, required: true, default: 0 },
        total: { type: Number, required: true, default: 0 },
        available: { type: Number, default: 0 },
      },
    ],
    total: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("bill", bill);
