let jwt = require("jsonwebtoken");
isSignedIn = (req, res, next) => {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];
  if (!token) return res.json("no token");
  jwt.verify(token, "jsdhbcjsd", (err, User) => {
    if (err) return res.json(`${err}  not signedin from verification`);

    req.User = User;
    exports.userdata = User;
    module.exports = User;
    // res.json(User);
    next();
  });
};

module.exports = isSignedIn;
