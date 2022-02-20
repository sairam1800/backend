const user = require("../../modules/user");

const { validationResult } = require("express-validator");
signup = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  const newuser = new user(req.body);
  newuser.save((err, newuser) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json({
        newuser,
      });
    }
  });
};
module.exports = signup;
