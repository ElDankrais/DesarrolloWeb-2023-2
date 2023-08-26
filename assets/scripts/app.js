// let normalVariable = 2;
// normalVariable = 'Perro';
// console.log(normalVariable);

// // AHORA CON CONST

// const luckyNumber = 666;
// luckyNumber = 7;

// // Y QUÉ PASA CON VAR?

// var saludar = "hey, hola";
// var tiempos = 4;

// if (tiempos > 3) {
//     var saludar = "dice Hola tambien"; 
// }

// console.log(saludar) // "dice Hola tambien"

// if (tiempos > 3) {
//     let hola = "dice Hola tambien";
//     console.log(hola);// "dice Hola tambien"
// }
// console.log(hola) // hola is not defined

//Un Ejemplo de Hoisting

// console.log(clase);

// let clase = "Muy muy divertida";

// Métodos de String

let stringEjemplo = "Qué bacano sería entregar 20 EP's en desarrollo web."
console.log(stringEjemplo.length);

console.log(stringEjemplo[3]);
stringEjemplo[-1];

'    omg  '.trim(); // "omg"

// Con argumentos

'spider'.indexOf('i'); //2
'vesuvius'.indexOf('u'); //3 - only returns FIRST matching index
'cactus'.indexOf('z'); //-1 not found

console.log(stringEjemplo.includes('sería'));
console.log('Con el slice ' + stringEjemplo.slice(3));
console.log(stringEjemplo.slice(0,10));
console.log(stringEjemplo)

// String Template Literals

const color = 'negro';
console.log(`Mi color favorito es: ${color}`);
console.log(`Hay ${60*60*24} segundos en un día`);

//OTROS TEMAS INTERESANTES: Math

console.log(Math.PI);