var mysql = require('mysql');

function createDBConnection() {

    if(!process.env.NODE_ENV) {
        return  mysql.createConnection({
            host : '192.168.33.100',
            user : 'root',
            password : 'y-P0vPLTfShP',
            database : 'casadocodigo_nodejs'
        });
    }

    if(process.env.NODE_ENV == 'test') {
        return  mysql.createConnection({
            host : '192.168.33.100',
            user : 'root',
            password : 'y-P0vPLTfShP',
            database : 'casadocodigo_nodejs_test'
        });
    }
}

//wrapper
module.exports = function() {
    return createDBConnection;
}