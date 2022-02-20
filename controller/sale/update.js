let sale_item = require("../../modules/sale");

update = async (req, res) => {
  let a = { _id: req.params.id };
  // if (req.body.password){}
  let r = await sale_item.findByIdAndUpdate(a, req.body);
  r = await sale_item.findById(a);
  return res.json(r);
};

module.exports = update;
