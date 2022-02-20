const item = require("../../modules/stock");

updateOnSubmit = async (req, res) => {
  let a = { _id: req.params.id };
  let r = await item.findById(a);

  item.findById(r).exec((err, result) => {
    if (result && result.available) {
      if (result.available >= req.body.no_of_items) {
        result.available = result.available - req.body.no_of_items;
        console.log("if");

        console.log(req.body);
      } else {
        console.log("else");
        console.log(req.body);

        result.available = 0;
      }
    }
    console.log("none");

    result.save((er, sav) => {
      if (er) return res.json(er);
      else return res.json(sav);
    });

    if (err) return res.json(err);
  });
};

module.exports = updateOnSubmit;
