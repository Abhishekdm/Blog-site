const express = require("express");
// creating a router function
const router = express.Router();

// @route GET api/profil
// @desc Test route
// @access Public
router.get("/", (req, res) => {
  res.send("profil route");
});

module.exports = router;
