let item = require("../../modules/stock");

data = (req, res) =>
  item.find().exec(function (err, d) {
    if (err) return res.json(err);
    else return res.json(d);
  });
module.exports = data;
