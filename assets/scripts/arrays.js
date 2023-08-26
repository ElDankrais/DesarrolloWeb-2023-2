//Arreglos

let array = [1,2,3,4,5,6,7,8,9,10,11];
console.log(array.length);

//Agregar y quitar elementos

array.push(40); //agrega un elemento al final
console.log(array[11]);
console.log(array.pop()); //Quita el último elemento
console.log(array);

//investigar shift y unshift

//OTROS MÉTODOS:

array.concat(['1', '2', '3', '4', '5']);
console.log(array);

console.log(array.join('-'));

array.sort((a, b) => a - b) //Esto es raro, pero se explica más adelante

console.log(array);

console.log('Con slice');
console.log(array.slice(0, 5));
console.log(array);

console.log('Con splice')
console.log(array.splice(0, 5));
console.log(array);

//Iterar

array.forEach(value => console.log(value)); //Esto es raro, pero se explica más adelante