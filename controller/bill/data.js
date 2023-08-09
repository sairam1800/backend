let bill = require("../../modules/bill");
data = (req, res) =>
  bill
    .find({})
    .sort("-createdAt")
    .exec(function (err, bills) {
      if (err) return res.json(err);
      else return res.json(bills);
    });

module.exports = data;
