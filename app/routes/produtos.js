module.exports = function(app){
    app.get('/produtos', function(req, res){
        
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

       produtosDAO.lista(function(err, results){
            if(err!=null){
                console.log(err);
            } else {
                res.format({
                    html: function(){
                        res.render('produtos/lista', {lista:results});
                    },
                    json: function(){
                        res.json(results);
                    }
                })
            }
        });
        connection.end();
    });

    app.get('/produtos/form', function(req, res){
        res.render('produtos/form', {errosValidacao:{}});
    });

    app.post('/produtos', function(req, res){
        var produto = req.body;

        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('preco', 'Formato inválido').isFloat();

        var erros = req.validationErrors();
        if(erros){
            res.render('produtos/form', {errosValidacao: erros});
            return;
        }

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.salva(produto, function(err, results){
            res.redirect('/produtos');
        });
    });

    app.get('/produtos/excluir', function(req, res){
        res.render('produtos/formExcluir');
    });

    // app.delete('/produtos', function(req, res){
    //     var id = req.body;
    //     console.log(id);
    // })
}