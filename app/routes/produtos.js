module.exports = function(app){
    app.get('/produtos', function(req, res){
        
        var connection = app.infra.connectionFactory();
        var produtosBanco = app.infra.produtosBanco;

       produtosBanco.lista(connection, function(err, results){
            if(err!=null){
                console.log(err);
            } else {
                res.render('produtos/lista', {lista:results});
            }
        });
        connection.end();
    });
}