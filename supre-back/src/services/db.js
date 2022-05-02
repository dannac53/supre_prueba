const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "supre_prueba",
});
connection.connect();
module.exports = connection;
