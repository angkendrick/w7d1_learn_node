/**
 * Created by kendrick on 15-08-10.
 */

var fs = require('fs');

var argv = process.argv;
var file = argv[2];
fs.readFile(file, function doneReading(err, data){
    if (err) {
        console.log(err);
    } else {
        var array = data.toString().split("\n");
        console.log(array.length - 1);
    }
});
