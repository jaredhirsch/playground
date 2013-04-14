var assert = require('assert'),
  mocha = require('mocha'),
  Q = require('q');

require('mocha-as-promised')();

suite('yow', function() {
  test('return a promise', function() {
    return Q.fcall(function() { assert.ok(true) })
  });

  test('wait for several calls', function() {
    return Q.all([
      Q.fcall(function() { assert.ok(true) }),
      Q.fcall(function() { assert.ok('yargg') }),
      Q.fcall(function() { assert.ok(true) })
    ]);
  });

  test('wait for paused call', function(done) {
    var def = Q.defer();
    setTimeout(function() {
      def.resolve();
    }, 1000);
    return def.promise;
  });

  test('chained calls', function(done) {
    return Q.fcall(function() { assert.ok(true) })
              .then(Q.fcall(function() { assert.ok(true) }));
  });

});
