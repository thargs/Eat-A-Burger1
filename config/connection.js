// Set up MySQL connection.
var mysql = require("mysql");

var connection= mysql.createConnection({
        host: "us-cdbr-iron-east-04.cleardb.net",
        user: "bfc213ab204ea3",
        password: "babd161c",
        database: "heroku_c7bce2c43da625f"
    });


// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;