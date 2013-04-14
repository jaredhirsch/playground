var assert = require('assert'),
  mocha = require('mocha'),
  Q = require('q');

require('mocha-as-promised')();

suite('yow', function() {
  test('return a promise', function() {
    return Q.fcall(function() { assert.ok(true) })
  });
});
