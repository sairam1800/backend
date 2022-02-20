const user = require("../../modules/user");
// user.pre("save", function (next) {
//   var user1 = this;
//   // only hash the password if it has been modified (or is new)
//   if (!user1.isModified("password")) return next();
//   // generate a salt
//   bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
//     if (err) return next(err);
//     // hash the password using our new salt
//     bcrypt.hash(user1.password, salt, function (err, hash) {
//       if (err) return next(err);
//       // override the cleartext password with the hashed one
//       user1.password = hash;
//       next();
//     });
//   });
// });

update = async (req, res) => {
  let a = { _id: req.params.id };
  // if (req.body.password){}
  let r = await user.findByIdAndUpdate(a, req.body);
  r = await user.findById(a);
  return res.json(r);
};

module.exports = update;
