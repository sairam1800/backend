let item = require("../../modules/stock");

create = (req, res) => {
  const newitem = new item(req.body);
  newitem.save((err, saved) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(saved);
    }
  });
};
module.exports = create;
