const express = require("express");
// creating a router function
const router = express.Router();

// @route GET api/posts
// @desc Test route
// @access Public
router.get("/", (req, res) => {
  res.send("Posts route");
});

module.exports = router;
