// Connecting Node to burgers_db in MySQL
// and then exporting the connection
var mysql = require("mysql");
var connection;

// Setting up connection for use on Heroku
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
// Localhost connection
else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "bootcamp",
    password: "bootcamp",
    database: "burgers_db"
  });
}

module.exports = connection;
