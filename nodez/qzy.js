#!/usr/bin/env node 

var Q = require('q'),
  assert = require('assert'),
  mocha = require('mocha');
//  mocha = require('mocha-as-promised');

suite('hail the world', function() {
  // setup(function() { console.log('\nsetup!\n') });
  // teardown(function() { console.log('\nteardown!\n') });

  test('foo is foo', function() {
    assert.equal('foo', 'foo');
  });

  test('async test 1 sec delay', function(done) {
    setTimeout(function() {
      done(assert.ok(true))
    }, 1000);
    console.log('started')
  });

});
