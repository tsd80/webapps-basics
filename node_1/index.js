require('dotenv').config();
const express = require('express');
const app = express();
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: '10.114.32.159',
  user: 'tsd',
  database: 'tsd',
  password: 'Sikjhg',
});

// simple query
connection.query(
    'SELECT * FROM ww',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      // console.log(fields); // fields contains extra meta data about results, if available
      console.log(err);
    }
);




app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.listen(3000);