var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController', function(){
    it('#listagem de produtos json',function(done){ 
        request.get('/produtos')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it('#cadastro de dados inválidos', function(done){
        request.post('/produtos')
        .send({titulo:"", descricao:"novo livro", preco:100})
        .expect(400, done);
    });

    it('#cadastro de dados válidos', function(done){
        request.post('/produtos')
        .send({titulo:"NodeJS Supertest", descricao:"novo livro", preco:100})
        .expect(302, done);
    });
});