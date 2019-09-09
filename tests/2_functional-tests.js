/*
*
*
*       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]-----
*       (if additional are added, keep them at the very end!)
*/

var chaiHttp = require('chai-http');
var chai = require('chai');
var assert = chai.assert;
var server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

  suite('API ROUTING FOR /api/threads/:board', function() {
    
    suite('POST', function() {
      test('Thread POST', function(done) {
       chai.request(server)
        .post('/api/threads/test')
        .send({
           text: 'test thread',
           delete_password: '123'
        })
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.equal(res.body.board, 'test')
          assert.equal(res.body.text, "test thread")
          assert.equal(res.body.delete_password, "123")
          done();
        });
      });
    });
    
    suite('GET', function() {
      test('Thread GET', function(done) {
       chai.request(server)
        .get('/api/threads/test')
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.equal(res.body[0].board, 'test')
          done();
        });
      });
    });
    
    suite('DELETE', function() {
      test('Thread DELETE', function(done) {
       chai.request(server)
        .delete('/api/threads/test')
        .send({
           thread_id: "5d764c8f7f57cd5d5abe313e",
           delete_password: "123"
         })
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.equal(res.text, 'success')
          done();
        });
      });
    });
    
    suite('PUT', function() {
      test('Thread PUT', function(done) {
       chai.request(server)
        .put('/api/threads/test')
        .send({
           thread_id: "5d764a38f51fe0474c382178",
         })
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.equal(res.text, 'success')
          done();
        });
      });
    });
  });
  
  suite('API ROUTING FOR /api/replies/:board', function() {
    
    suite('POST', function() {
      test('Replies POST', function(done) {
       chai.request(server)
        .post('/api/replies/test')
        .send({
           thread_id: "5d764a38f51fe0474c382178",
           text: "test reply",
           delete_password: "123"
         })
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.equal(res.body.board, 'test')
          assert.equal(res.body.thread_id, '5d764a38f51fe0474c382178')
          assert.equal(res.body.text, 'test reply')
          assert.equal(res.body.delete_password, '123')
          done();
        });
      });
    });
    
    suite('GET', function() {
      test('Replies GET', function(done) {
       chai.request(server)
        .get('/api/replies/test?thread_id=5d764a38f51fe0474c382178')
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.equal(res.body.board, 'test')
          assert.equal(res.body._id, '5d764a38f51fe0474c382178')
          done();
        });
      });
    });
    
    suite('PUT', function() {
      test('Replies PUT', function(done) {
       chai.request(server)
        .put('/api/replies/test')
        .send({
           thread_id: "5d764a38f51fe0474c382178",
           reply_id: "5d764bcf81272755470e4d6e"
         })
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.equal(res.text, 'success')
          done();
        });
      });
    });
    
    suite('DELETE', function() {
      test('Replies DELETE', function(done) {
       chai.request(server)
        .delete('/api/replies/test')
        .send({
           thread_id: "5d764a38f51fe0474c382178",
           reply_id: "5d764bcf81272755470e4d6e",
           delete_password: "123"
         })
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.equal(res.text, 'success')
          done();
        });
      });
    });
  });
});
