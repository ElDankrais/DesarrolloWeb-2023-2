function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}

// Subamos el nivel
// Recordemos el scope

//Lexical scope

function bankRobbery() {
    const heroes = ['Batman', 'Green Lantern', 'Aquaman'];
    function cryForHelp() {
        for(let hero of heroes) {
            console.log(`HELP ${hero}`);
        }
    }
}

//Function expressions

const square = function(num) {
    return num ** 2
}

console.log(square(7));

//High order functions
//Funciones que trabajan con otras funciones (reciben o retornan)

//Algunos ejemplos con this

//try - catch

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log("Please pass a string next time!")
    }
}

//Arrow functions y Callbacks

//forEach, map, filter

//setTimeout, setInterval

//every, some

//reduce