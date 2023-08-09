const daily = require("../../modules/daily");

update = async (req, res) => {
  let a = { _id: req.params.id };
  let r = await daily.findById(a);

  daily.findById(r).exec((err, result) => {
    if (result) {
      result.no = Number(result.no) + 1;

      result.total = Number(result.total) + Number(req.body.total);
      result.investment =
        Number(result.investment) + Number(req.body.investment);
      result.revenue = Number(result.total) - Number(result.investment);
      result.profit = (
        ((Number(result.total) - Number(result.investment)) * 100) /
        Number(result.investment)
      ).toFixed(2);
    }
    result.save((er, sav) => {
      if (er) return res.json(er);
      else return res.json(sav);
    });

    if (err) return res.json(err);
  });
};

module.exports = update;
