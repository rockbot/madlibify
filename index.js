var hbs = require('handlebars');
var _ = require('lodash');

var Madlibify = module.exports;
  
Madlibify.compile = function (str, obj) {
  var template = hbs.compile(str);
  return template(obj);
}

Madlibify.parse = function (str) {
  var matches = str.match(/{{([^}]+)}}/g);
  var matches = _.unique(matches, true);
  var matches = _.map(matches, function (str) { return _.trim(str, '{}'); });
  return matches;
}
