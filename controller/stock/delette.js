let item = require("../../modules/stock");

delette = (req, res) => {
  let a = { _id: req.params.id };

  item.findByIdAndRemove(a, function (err, doc) {
    if (err) return res.json(err);
    else return res.json("deleted");
  });
};
module.exports = delette;
