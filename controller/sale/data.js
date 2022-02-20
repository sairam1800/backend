let sale_item = require("../../modules/sale");

data = (req, res) =>
  sale_item.find().exec(function (err, d) {
    if (err) return res.jason(err);
    else return res.json(d);
  });
module.exports = data;
