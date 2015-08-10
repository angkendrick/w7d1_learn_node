/**
 * Created by kendrick on 15-08-10.
 */

var run = require('./06_modules');

var argv = process.argv;
var dir = argv[2];
var type = argv[3];



run(dir, type, function(err, data){
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
});




