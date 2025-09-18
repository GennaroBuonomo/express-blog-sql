// importo mysql
const mysql = require("mysql2")

// Creo la connessione
const connection = mysql.createConnection({
  host: "boolean",
  user: "root",
  password:"Root",
  database: "db_blog"
})

connection.connect((err) => {
  if(err){
    console.log(err);
  }
  else{
    console.log("connesso")
  }
});

module.exports = connection;