var tap = require('tap');
var test = tap.test;

var madlibify = require('../index');

test('it parses a handlebars-y string', function (t) {
  var str = "The quick {{color}} {{noun1}} jumps over the lazy {{noun2}}";

  var bits = madlibify.parse(str);
  t.deepEqual(bits, ['color', 'noun1', 'noun2']);
  t.end();
});

test('it parses a handlebars-y string with multiple single bit types', function (t) {
  var str = "The quick {{color}} {{noun1}} jumps over the lazy {{noun1}}";
  var bits = madlibify.parse(str);
  t.deepEqual(bits, ['color', 'noun1']);
  t.end();
});

test('it takes a handlebars-y string and compiles the object', function (t) {
  var str = "The quick {{color}} {{noun1}} jumps over the lazy {{noun2}}";
  var obj = {
    color: 'brown',
    noun1: 'fox',
    noun2: 'dog'
  };

  var text = madlibify.compile(str, obj);
  t.equal(text, 'The quick brown fox jumps over the lazy dog');
  t.end();
});

