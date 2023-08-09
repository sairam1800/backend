let daily = require("../../modules/daily");
data = (req, res) =>
  daily
    .find({})
    .sort("-createdAt")
    .exec(function (err, dailyb) {
      if (err) return res.json(err);
      else return res.json(dailyb);
    });

module.exports = data;
