const express = require("express");
// creating a router function
const router = express.Router();

// @route GET api/profil
// @desc Test route
// @access Public
router.get("/", (req, res) => {
  res.send("profile route");
});

module.exports = router;
