var should = require('should');
var app = require('../app');
var request = require("supertest");

describe('API Test for Login', ()=>{
    it('should ensure login works well', (done)=>{
       request(app)
       .post('/api/login')
       .set("Connection", "keep alive")
       .set("Content-Type", "application/json")
       .send({username: "hackerBay", password: "12345678"})
       .expect(200)
        .end(function(err, res) {
            if (err) done(err);
            res.body.should.have.property('token');
            res.body.should.have.property('user', "hackerBay");
        });
        done();
    });
    afterEach('ensuring everything is cleaned up', (done)=>{
        done();
    });
});

describe('API Test for protected routes', ()=>{
    var token;
    beforeEach('verify token', (done)=>{
        request(app)
        .post('/api/login')
        .set("Connection", "keep alive")
        .set("Content-Type", "application/json")
        .send({username: "hackerBay", password: "12345678"})
        .expect(200)
        .end(function(err, res) {
            if (err) done(err);
            res.body.should.have.property('token');
            res.body.should.have.property('user', "hackerBay");
            token = res.body.token;
            done();
        });
    });
    var document = {"baz": "qux", "foo": "bar"};
    var patch = [{"op": "replace", "path": "/baz", "value": "soft"}];
    it('should ensure json patch works well',function(done){
        request(app)
        .patch('/api/patch')
        .set("Connection", "keep alive")
        .set("Content-Type", "application/json")
        .send({token: token, document: document, patch: patch})
        .end(function(err, res) {
            if (err) done(err);
            res.body.should.have.property('baz');
            res.body.should.have.property('baz', "soft");
            done();
        });
    });

});