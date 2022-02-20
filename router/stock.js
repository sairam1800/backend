var express = require("express");
var router = express.Router();
const create = require("../controller/stock/create");
const update = require("../controller/stock/update");
const delette = require("../controller/stock/delette");
const data = require("../controller/stock/data");
const updateOnSubmit = require("../controller/stock/updateOnSubmit");
const isSignedIn = require("../controller/user/issignedin");

router.post("/create", isSignedIn, create);
router.get("/data", isSignedIn, data);

router.put("/update/:id", isSignedIn, update);
router.put("/updateOnSubmit/:id", isSignedIn, updateOnSubmit);

router.get("/delete/:id", isSignedIn, delette);
module.exports = router;
