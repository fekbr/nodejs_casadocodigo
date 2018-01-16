var http = require('http');

describe('ProdutosController', function(done){
    it('#listagem json',function(){
       
        var configuracoes = {
            hostname: 'localhost',
            port: 3000,
            path: '/produtos',
            headers: {
                'Accept':'application/json'
            }
        }
        
        http.get(configuracoes, function(res){
            if(res.statusCode == 200){
                console.log("Status OK");
            }

            if(res.headers['content-type'] == 'application/json; charset=utf-8'){
                console.log("Content-type OK");
            }
            done();
        });

    });
});