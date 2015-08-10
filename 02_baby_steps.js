/**
 * Created by kendrick on 15-08-10.
 */

var array = process.argv;

array.splice(0, 2);

var total = 0;
array.forEach(function(item){
    total += Number(item);
});

console.log(total);