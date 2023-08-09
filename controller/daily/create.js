let daily = require("../../modules/daily");

create = (req, res) => {
  const ndaily = new daily({
    no: req.body.no,
    total: req.body.total,
    investment: req.body.investment,
    profit: (
      ((req.body.total - req.body.investment) * 100) /
      req.body.investment
    ).toFixed(2),

    revenue: req.body.total - req.body.investment,
  });
  ndaily.save((err, saved) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(saved);
    }
  });
};
module.exports = create;
