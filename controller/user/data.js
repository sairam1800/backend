const user = require("../../modules/user");

data = (req, res) =>
  user.find().exec(function (err, d) {
    if (err) return res.json(err);
    else return res.json(d);
  });
module.exports = data;
