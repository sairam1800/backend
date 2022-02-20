const user = require("../../modules/user");

delette = (req, res) => {
  let a = { _id: req.params.id };
  user.findByIdAndDelete(a, function (err, doc) {
    if (err) return res.json(err);
    else return res.json("deleted");
  });
};

module.exports = delette;
