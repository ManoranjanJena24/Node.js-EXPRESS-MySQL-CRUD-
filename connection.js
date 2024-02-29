const mysql = require('mysql2')
var mysqlConnection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'user',
    database: 'employeedb'

})
var connection = mysqlConnection.connect((err) => {
    if (err) {
        console.log("Error In Connecting to DB:  " + JSON.stringify(err, undefined, 2))
    }
    else {
        console.log("Connected Succesfully")
    }
})

module.exports = connection