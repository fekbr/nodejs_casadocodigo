var mysql = require('mysql');

function createDBConnection() {
    return  mysql.createConnection({
        host : '192.168.33.100',
        user : 'root',
        password : 'y-P0vPLTfShP',
        database : 'casadocodigo_nodejs'
    });
}

//wrapper
module.exports = function() {
    return createDBConnection;
}