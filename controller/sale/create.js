let sale_item = require("../../modules/sale");

create = (req, res) => {
  const newsaleitem = new sale_item(req.body);
  newsaleitem.save((err, saved) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(saved);
    }
  });
};
module.exports = create;
