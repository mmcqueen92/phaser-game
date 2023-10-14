const express = require("express");
const router = express.Router();
const db = require("./db");

// Get scores
router.get("/scores", (req, res) => {
  db.all("SELECT * FROM scores ORDER BY score DESC", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ scores: rows });
  });
});

// Add a new score
router.post("/scores", (req, res) => {
  const { name, score } = req.body;

  db.run(
    "INSERT INTO scores (name, score) VALUES (?, ?)",
    [name, score],
    (err) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({ message: "Score added" });
    }
  );
});

module.exports = router;
