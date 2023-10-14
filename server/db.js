const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("scores.db");

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS scores (name TEXT, score INT)");
});

module.exports = db;
