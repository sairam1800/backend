var mongoose = require("mongoose");
let daily = new mongoose.Schema(
  {
    no: { type: Number },
    total: { type: Number },
    investment: { type: Number },
    profit: {
      type: Number,
      default: 0,
    },
    revenue: { type: Number, default: 0 },
  },

  { timestamps: true }
);

module.exports = mongoose.model("daily", daily);
