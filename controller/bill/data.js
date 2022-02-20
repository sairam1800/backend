let bill = require("../../modules/bill");

data = (req, res) =>
  bill.find().exec(function (err, bills) {
    bill.find({}).sort({ createdAt: 1 });
    if (err) return res.json(err);
    else return res.json(bills);
  });
module.exports = data;
