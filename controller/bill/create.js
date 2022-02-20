let bill = require("../../modules/bill");

create = (req, res) => {
  const newbill = new bill(req.body);
  newbill.save((err, saved) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(saved);
    }
  });
};
module.exports = create;
