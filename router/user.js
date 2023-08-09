var express = require("express");
var router = express.Router();
const { check } = require("express-validator");
let signup = require("../controller/user/signup");
let signout = require("../controller/user/signout");
let signin = require("../controller/user/signin");
let issignedin = require("../controller/user/issignedin");
let delette = require("../controller/user/delette");
let update = require("../controller/user/update");
let data = require("../controller/user/data");

//signup
router.post(
  "/signup",
  [check("name").isLength({ min: 1 }), check("email").isEmail()],
  signup
);

//signin
router.post(
  "/signin",
  [
    check("email").isEmail(),
    check("password").isLength({
      min: 1,
    }),
  ],
  signin
);

router.get("/data", data);

//signout
router.get("/signout", signout);

//upade
router.put("/update/:id", update);

//delete
router.get("/delete/:id", delette);
module.exports = router;
