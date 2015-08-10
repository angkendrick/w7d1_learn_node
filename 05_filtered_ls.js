/**
 * Created by kendrick on 15-08-10.
 */

var fs = require('fs');

var argv = process.argv;

var path = argv[2];
var type = argv[3];
var dot = '.';
var dotType = dot.concat(type);
var re = new RegExp("(" + dotType + ")$");

fs.readdir(path, function callback(err, data){
    if (err) {
        console.log(err);
    } else {
        for (var i = 0; i < data.length; i++) {
            if (data[i].match(re)) {
                console.log(data[i]);
            }
        }
    }
});

