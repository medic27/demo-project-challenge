const express = require("express");
const router = express.Router();
const { db } = require("./../lib/database");

router.get("/api/questionnaire/:id", function(req, res) {
  const id = req.params.id;

  db.one("SELECT questions FROM questionnaire WHERE ID = $1 LIMIT 1", [id])
    .then(data => res.status(200).send(JSON.stringify(data)))
    .catch(err => res.status(500).send(err.message));
});

router.post("/api/questionnaire", function(req, res) {
  const id = req.body.id;

  //UPSERT to update the questionnaire JSON if there is an ID conflict
  db.one(
    "INSERT INTO questionnaire VALUES($1, $2) ON CONFLICT (id) DO UPDATE SET questions = $2 RETURNING id",
    [id, req.body],
  )
    .then(data => res.status(200).send(data.id))
    .catch(error => res.status(500).send(error.message));
});

module.exports = router;
