const express = require("express");
const router = express.Router();
const getAllQuotes = require("../controllers/quotes");

const auth = require("../middlewares/auth");

router.route("/quotes").get(auth, getAllQuotes);

module.exports = router;
