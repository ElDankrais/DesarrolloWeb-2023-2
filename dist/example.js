"use strict";
function greet(name, date) {
    console.log(`Hello ${name}, today is ${date.toDateString()}`);
}
var personMood;
(function (personMood) {
    personMood["happy"] = "feli";
    personMood["sad"] = "truste";
    personMood["normal"] = ":v";
})(personMood || (personMood = {}));
console.log(personMood.happy);
