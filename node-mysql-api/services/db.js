const mysql = require("mysql2");
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "nandini",
  database: "webtechtalk",
});

conn.connect();

module.exports = conn;
