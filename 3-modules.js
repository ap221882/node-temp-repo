//Modules - encapsulated code(only share minimum)
//CommonJS library is used by node under the hood - every file is module by default

const names = require("./4-names");

const sayHi = require("./5-utils");

const data = require("./6-alternative-flavour");
console.log(names);
sayHi(names.john);
// sayHi(john);
sayHi(names.peter);
// console.log(data);

require("./7-mind-grenade");

//Note: when you import a module, you actually invoke it
