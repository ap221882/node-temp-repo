//npm - global comes with node
// npm --version

//local dependency - use it only in this particular project
// npm i <packagename>

//global dependency - us it in any project
//npm install -g <packagename>

//development dependency- for development only
// npm i <package-name> --save-dev
// npm i <package-name> -D

//package.json - manifest file that stores important info about project/package
//1>manual approach(crate package.json in the root)
//2>npm init(step by step,enter to exit)
//3>npm init -y(everything default)

//uninstall a package
//npm uninstall <packagename>

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

console.log("hello people");
