/**
 * Created by kendrick on 15-08-10.
 */

var fs = require('fs');

module.exports = function(dir, type, callback) {

    var dot = '.';
    var ext = dot.concat(type);
    var re = new RegExp("(" + ext + ")$");

    fs.readdir(dir, function(err, data){
        var array = [];
        if (err) {
            return callback(err);
        } else {
            for (var i = 0; i < data.length; i++) {
                if (data[i].match(re)) {
                    array.push(data[i]);
                }
            }
        }
        return callback(null, array);
    });

}
