const express = require("express");

const { getData } = require("../controller/dataController");
const router = express.Router();

//GET ROUTE FOR ALL PRODUCTS
router.route("/data").get(getData);

module.exports = router;
