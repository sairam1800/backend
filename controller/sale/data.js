let sale_item = require("../../modules/sale");

data = (req, res) =>
  sale_item
    .find()
    .sort("-createdAt")
    .exec(function (err, d) {
      if (err) return res.json(err);
      else return res.json(d);
    });
module.exports = data;
