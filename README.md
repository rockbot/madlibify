# Madlibify
Create your own [madlibs](https://en.wikipedia.org/wiki/Mad_Libs) word game!

## To use
```js
var mads = require('madlibify');

var text = "The quick {{color1}} {{noun1}} jumps over the lazy {{noun2}}";

// Parse out the fill-in-the-blanks
var blanks = mads.parse(text); 
console.log(blanks); // ["color1", "noun1", "noun2"]

// Fill in the blanks!
var serious = {
  color1: 'brown',
  noun1: 'fox',
  noun2: 'dog'
};
var madlibs = mads.compile(text, serious);
console.log(madlibs); // The quick brown fox jumps over the lazy dog

// Be silly!
var silly = {
  color1: 'blue',
  noun1: 'truck',
  noun2: 'tree'
};
var madlibs = mads.compile(text, silly);
console.log(madlibs); // The quick blue truck jumps over the lazy tree
