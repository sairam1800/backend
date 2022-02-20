const sale_item = require("../../modules/sale");

updateOnSubmit = async (req, res) => {
  let a = { _id: req.params.id };
  let r = await sale_item.findById(a);

  sale_item.findById(r).exec((err, result) => {
    if (result) {
      result.number_of_items =
        Number(result.number_of_items) + Number(req.body.no_of_items);
    }
    result.save((er, sav) => {
      if (er) return res.json(er);
      else return res.json(sav);
    });

    if (err) return res.json(err);
  });
};

module.exports = updateOnSubmit;
