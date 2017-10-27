'use strict';
//Closure is the ability of a function to access outer variables in a parent function

//Part 1
function greet(whattosay) {

    return function(name) {
        console.log(whattosay + ' ' + name);
        console.log('end of part 1-------------');
    };

}

var sayHi = greet('Hi');
sayHi('Tony');

//Part 2 

function buildFunctions() {

    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);
                }
            })(i));
    }

    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

