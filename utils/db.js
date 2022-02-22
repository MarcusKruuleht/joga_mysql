// setup database connection
const mysql = require('mysql');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "joga_mysql"
});

module.exports = db;