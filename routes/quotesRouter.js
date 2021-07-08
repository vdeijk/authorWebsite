const express = require("express");
const quotesController = require("../controllers/quotesController")

const router = express.Router();

router.route("/quotes").get(quotesController.getQuotes);
router.route("/singleQuote").get(quotesController.getSingleQuote);

module.exports = router;