let sale_item = require("../../modules/sale");

delette = (req, res) => {
  let a = { _id: req.params.id };

  sale_item.findByIdAndRemove(a, function (err, doc) {
    if (err) return res.json(err);
    else return res.json("deleted");
  });
};
module.exports = delette;
