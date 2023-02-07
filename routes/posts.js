const express = require("express");
const router = express.Router();
const { getAllPosts, getPublicPosts } = require("../controllers/allPosts");

const auth = require("../middlewares/auth");

router.route("/posts").get(auth, getAllPosts);

router.route("/public-posts").get(getPublicPosts);

module.exports = router;
