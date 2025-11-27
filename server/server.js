const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

// MySQL credentials
const MYSQL_HOST = "mysql";
const MYSQL_DATABASE = "userdata";
const MYSQL_USER = "root";
const MYSQL_PASS = "Prashant2932";

// MySQL Connection Pool
const db = mysql.createPool({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASS,
  database: MYSQL_DATABASE,
});

// Test Database Connection
db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ MySQL connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL Database");
    connection.release();
  }
});

// =======================
//       ROUTES
// =======================

// GET API — Fetch data from DB
app.get("/api/get", (req, res) => {
  const sql = "SELECT message FROM hello_entity"; // example table
  db.query(sql, (err, results) => {
    if (err) {
      console.error("❌ Error fetching data:", err);
      return res.status(500).json({ error: "DB error" });
    }
    res.json({ result: results });
  });
});
// app.get("/api/get", (req, res) => {
//   res.json({ result: "Hello! This is test data from Node.js." });
// });


// Server Running
app.listen(4200, "0.0.0.0", () => {
  console.log(`Server running on 4200`);
});