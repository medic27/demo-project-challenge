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

router.get("/api/answers/:id", function(req, res) {
  const id = req.params.id;
  db.one("SELECT answers FROM answers WHERE ID = $1 LIMIT 1", [id])
    .then(data => res.status(200).send(JSON.stringify(data)))
    .catch(err => res.status(500).send(err.message));
});

router.post("/api/answers", function(req, res) {
  const { name, email } = req.body.data;
  req.body.data.id = Buffer.from(`${name}${email}`).toString("base64");
  req.body.data.at = JSON.stringify(new Date());

  //UPSERT to update the questionnaire JSON if there is an ID conflict
  db.one(
    "INSERT INTO answers VALUES($1, $2, $3) ON CONFLICT (id) DO UPDATE SET answers = $3 RETURNING id",
    [req.body.data.id, req.body.data.for, req.body.data],
  )
    .then(data => res.status(200).send(data.id))
    .catch(error => res.status(500).send(error.message));
});

module.exports = router;
