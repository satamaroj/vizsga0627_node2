const mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "vizsga0627"

})

connection.connect((err)=>{
    if(!err)
    {
        console.log("Connected");
    }
    else
    console.log(err);
});

module.exports = connection;