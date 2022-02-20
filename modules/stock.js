var mongoose = require("mongoose");
let item = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        maxlength: 100,
      },
      actual_price: {
        type: Number,
        trim: true,
        required: true,
      },
      selling_price_range: {
         min:{type: Number,
            trim: true,
            required: true,},
            max:{type: Number,
                trim: true,
                required: true,
            }
        
      },
      available: {
        type: Number,
        default: 0,
      },
    },
    { timestamps: true }
  );

  module.exports = mongoose.model("item", item);