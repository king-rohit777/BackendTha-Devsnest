//using modules

var Test = require("./require_test");
var obj = new Test();
var returned_value = obj.print();
console.log(returned_value);