var mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const SALT_WORK_FACTOR = 7;
let user = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 50,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      // required: true,
    },
    isadmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
user.pre("save", function (next) {
  var user1 = this;
  // only hash the password if it has been modified (or is new)
  if (!user1.isModified("password")) return next();
  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);
    // hash the password using our new salt
    bcrypt.hash(user1.password, salt, function (err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user1.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model("user", user);
