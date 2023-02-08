const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  getPublicPosts,
  getSinglePost,
} = require("../controllers/allPosts");

const auth = require("../middlewares/auth");

router.route("/posts").get(auth, getAllPosts);

router.route("/posts/:id").get(auth, getSinglePost);

router.route("/public-posts").get(getPublicPosts);

module.exports = router;
