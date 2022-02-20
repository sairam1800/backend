signout = (req, res) => {
  token = "";
  res.clearCookie("token");

  return res.json("you are signed out");
};
module.exports = signout;
