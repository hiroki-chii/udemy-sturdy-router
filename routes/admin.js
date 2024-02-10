const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  if (req.query.isAdmin) {
    return next();
  }
  res.send("Not Admin!!!!!");
});

router.get("/secret", (req, res) => {
  res.send("secret!!!!!");
});

router.get("/deleteAll", (req, res) => {
  res.send("deleted all!!!!");
});

module.exports = router;
