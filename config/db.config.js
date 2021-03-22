import mysql from "mysql2"

// /* create mySQL connection */
// export const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "practice1_db",
// })

const db = mysql.createConnection({
  host: process.env.MYSQL_DB_HOST,
  user: "root",
  password: process.env.MYSQL_DB_PASSWORD,
  database: "practice1_db",
})

db.connect(function (error) {
  if (error) throw error
  console.log("Database Connected Successfully!!!")
})

module.exports = db
