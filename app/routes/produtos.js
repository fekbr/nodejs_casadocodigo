module.exports = function(app){
    app.get('/produtos', function(req, res){
        
        var connection = app.infra.connectionFactory();
        var produtosBanco = new app.infra.ProdutosDAO(connection);

       produtosBanco.lista(function(err, results){
            if(err!=null){
                console.log(err);
            } else {
                res.render('produtos/lista', {lista:results});
            }
        });
        connection.end();
    });

    app.get('/produtos/form', function(req, res){
        res.render('produtos/form');
    });
}