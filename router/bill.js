var express = require("express");
var router = express.Router();
const create = require("../controller/bill/create");
const delette = require("../controller/bill/delette");
const data = require("../controller/bill/data");
const count = require("../controller/bill/count");

const isSignedIn = require("../controller/user/issignedin");

router.post("/create", isSignedIn, create);
router.get("/data", isSignedIn, data);
router.get("/count", isSignedIn, count);

router.get("/delete/:id", isSignedIn, delette);
module.exports = router;
