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
        res.render('produtos/form');
    });

    app.post('/produtos', function(req, res){
        var produto = req.body;

        var validatorTitulo = req.assert('titulo', 'Título é obrigatório');
        validatorTitulo.notEmpty();
        var erros = req.validationErrors();
        if(erros){
            res.render('produtos/form');
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