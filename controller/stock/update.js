let item = require("../../modules/stock");

update = async (req, res) => {
  let a = { _id: req.params.id };
  // if (req.body.password){}
  let r = await item.findByIdAndUpdate(a, req.body);
  r = await item.findById(a);
  return res.json(r);
};

module.exports = update;
