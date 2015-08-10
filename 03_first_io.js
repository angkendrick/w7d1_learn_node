/**
 * Created by kendrick on 15-08-10.
 */

var fs = require('fs');

var argv = process.argv;
var file = argv[2];
var buffer = fs.readFileSync(file);
var array = buffer.toString().split("\n");
console.log(array.length - 1);


