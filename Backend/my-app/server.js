const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());
// parse application/json
app.use(bodyParser.json());

// Create database connection
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "lts",
});

// Check for database connection errors
conn.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: " + err);
    return;
  }
  console.log("Connected to the database");
});

// Registration endpoint
// Registration endpoint
app.post("/register", (req, res) => {
    const { Username, Email, FatherName, CNIC, Password } = req.body;
  
    // Use a prepared statement to insert user data into the 'users' table
    const sql = "INSERT INTO users (Username, Email, FatherName, CNIC, Password) VALUES (?, ?, ?, ?, ?)";
    conn.query(
      sql,
      [Username, Email, FatherName, CNIC, Password],
      (err, result) => {
        if (result) {
          res.send(result);
        } else {
          res.send({message:"Enter Correct Details"})
        }
      }
    );
  });

//   login side
  app.post("/login", (req, res) => {
    const { Username, Password } = req.body;
  
    // Use a prepared statement to insert user data into the 'users' table
    conn.query("SELECT * FROM users WHERE Username= ? AND Password= ?",
      [Username, Password],
      (err, result) => {
        if (err) {
          res.setEncoding({err: err});
        } else {

            if (result.length > 0){
                res.send(result);
            }
            else{
                res.send({message:"Wrong Details"})

            }
        }
      }
    );
  });


// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
