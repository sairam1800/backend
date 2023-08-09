var express = require("express");
var router = express.Router();
const create = require("../controller/daily/create");
const update = require("../controller/daily/update");
const delette = require("../controller/daily/delette");
const data = require("../controller/daily/data");
const isSignedIn = require("../controller/user/issignedin");

router.post("/create", isSignedIn, create);
router.get("/data", isSignedIn, data);

router.put("/update/:id", isSignedIn, update);

router.get("/delete/:id", isSignedIn, delette);
module.exports = router;
