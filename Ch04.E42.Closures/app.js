'use strict';
//Closure is the ability of a function to access outer variables in a parent function

//Part 1
function greet(whattosay) {

    return function(name) {
        console.log(whattosay + ' ' + name);
    }

}

var sayHi = greet('Hi');
sayHi('Tony');
