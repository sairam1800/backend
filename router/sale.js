var express = require("express");
var router = express.Router();
const create = require("../controller/sale/create");
const update = require("../controller/sale/update");
const delette = require("../controller/sale/delette");
const data = require("../controller/sale/data");
const updateOnSubmit = require("../controller/sale/updateOnSubmit");
const isSignedIn = require("../controller/user/issignedin");

router.post("/create", isSignedIn, create);
router.get("/data", isSignedIn, data);

router.put("/update/:id", isSignedIn, update);
router.put("/updateOnSubmit/:id", isSignedIn, updateOnSubmit);

router.get("/delete/:id", isSignedIn, delette);
module.exports = router;
