const express = require("express");
const router = express.Router();
const { db } = require("./../lib/database");

router.get("/api/questionnaire", function(req, res) {
  res.send("GET request to the questionnaire");
});

router.post("/api/questionnaire", function(req, res) {
  res.send(JSON.stringify('{"test":1}'));
});

module.exports = router;
