const express = require("express");
const emailController = require("../controllers/emailController")

const router = express.Router();

router.route("/sendeBook").post(emailController.sendeBook);

module.exports = router;

