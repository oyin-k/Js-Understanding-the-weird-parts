'use strict';

function sayHiLater() {
    var greeting = 'Hi';

    setTimeout(function() {
        console.log(greeting);
    }, 3000);
}

sayHiLater();


function tellMeSomething(callback) {
    //bla bla bla
    callback();
}

tellMeSomething(function() {
    console.log('we just wrote a callback');
})