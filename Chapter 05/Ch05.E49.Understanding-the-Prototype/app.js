'use strict';

var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

//dont do this EVER! for demo purposes only
john.__proto__ = person;
console.log(john.getFullName());

var jane = {
    firstname: 'jane'
}

jane.__proto__ = person;
console.log(jane.getFullName());