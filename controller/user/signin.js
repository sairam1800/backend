const user = require("../../modules/user");
const { validationResult } = require("express-validator");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

signin = (req, res) => {
  const errors = validationResult(req);
  const { email, password } = req.body;

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  user.findOne({ email }, (err, User) => {
    if (err || !User) {
      return res.status(400).json({
        error: `user ${email} does not exists`,
      });
    }
    bcrypt.compare(password, User.password, function (err, result) {
      if (err) return res.json({ error: `${err} password is wrong ` });
      else {
        const token = jwt.sign({ _id: User._id }, "jsdhbcjsd", {
          expiresIn: "5000m",
        });
        res.cookie("token", token);

        const { _id, name, email, isadmin } = User;
        // const r = `${name} is signed in`;
        return res.json(
          // r,
          {
            token,

            User: { _id, name, email, isadmin },
          }
        );
        // res.json({ result: `${User.name} is signed in` })
      }
    });
  });
};
module.exports = signin;
