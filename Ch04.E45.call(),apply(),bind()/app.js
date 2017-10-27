'use strict';

var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullname: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}


var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullname());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('---------');
}

var logPersonName = logName.bind(person);

logPersonName();

logName.call(person, 'en', 'es');
logName.apply(person, ['en', 'es']);

//function borrowing

var person2 = {
    firstname: 'yinmu',
    lastname: 'yetunde'
}


console.log(person.getFullname.apply(person2));

//function currying
function multiply(a, b) {
    return a*b;
}

var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));

var multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(4));