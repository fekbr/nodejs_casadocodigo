module.exports = function(app){
    app.get('/produtos', function(req, res){
        
        var connection = app.infra.connectionFactory();
        var produtosBanco = app.infra.produtosBanco(connection);

       produtosBanco.lista(function(err, results){
            if(err!=null){
                console.log(err);
            } else {
                res.render('produtos/lista', {lista:results});
            }
        });
        connection.end();
    });

    app.get('produtos/remove', function(){

        var connection = app.infra.connectionFactory;
        var produtosBanco = app.infra.produtosBanco;
        var produto = produtosBanco.carrega(connection. id, callback);

        if(produto) {
            produtosBanco.remove(connection, produto, callback);
        }
    });
}