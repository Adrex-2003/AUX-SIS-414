// Método: concat()
// Une dos o más arrays y devuelve un nuevo array.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = array1.concat(array2);
console.log("concat():", newArray); // Output: [1, 2, 3, 4, 5, 6]

// Método: copyWithin()
// Copia una parte del array a otra ubicación dentro del mismo array, sobrescribiendo los valores existentes.
const array3 = [1, 2, 3, 4, 5];
array3.copyWithin(0, 3, 4);
console.log("copyWithin():", array3); // Output: [4, 2, 3, 4, 5]

// Método: entries()
// Devuelve un nuevo objeto Array Iterator que contiene pares clave/valor para cada índice en el array.
const array4 = ['a', 'b', 'c'];
const iterator = array4.entries();
console.log("entries():", iterator.next().value); // Output: [0, 'a']

// Método: every()
// Comprueba si todos los elementos en el array satisfacen una condición especificada por una función.
const array5 = [1, 2, 3, 4, 5];
const isBelowThreshold = (currentValue) => currentValue < 10;
console.log("every():", array5.every(isBelowThreshold)); // Output: true

// Método: fill()
// Rellena todos los elementos del array con un valor estático.
const array6 = [1, 2, 3, 4, 5];
console.log("fill():", array6.fill(0, 2, 4)); // Output: [1, 2, 0, 0, 5]

// Método: filter()
// Crea un nuevo array con todos los elementos que pasan la prueba implementada por la función proporcionada.
const array7 = [1, 2, 3, 4, 5];
const filteredArray = array7.filter(element => element > 2);
console.log("filter():", filteredArray); // Output: [3, 4, 5]

// Método: find()
// Devuelve el primer elemento que cumple con la condición dada por la función de prueba.
const array8 = [5, 12, 8, 130, 44];
const found = array8.find(element => element > 10);
console.log("find():", found); // Output: 12

// Método: findIndex()
// Devuelve el índice del primer elemento que cumple con la condición dada por la función de prueba.
const array9 = [5, 12, 8, 130, 44];
const index = array9.findIndex(element => element > 10);
console.log("findIndex():", index); // Output: 1

// Método: flat()
// Crea un nuevo array con todos los elementos de sub-array concatenados en él recursivamente hasta la profundidad especificada.
const array10 = [1, 2, [3, 4]];
console.log("flat():", array10.flat()); // Output: [1, 2, 3, 4]

// Método: forEach()
// Ejecuta una función proporcionada una vez por cada elemento del array.
const array11 = ['a', 'b', 'c'];
array11.forEach(element => console.log(element)); // Output: 'a', 'b', 'c'

// Método: includes()
// Determina si un array incluye un determinado valor entre sus elementos.
const array12 = [1, 2, 3];
console.log("includes():", array12.includes(2)); // Output: true

// Método: indexOf()
// Devuelve el primer índice en el que se encuentra un elemento dado en el array, o -1 si no está presente.
const array13 = [2, 5, 9];
console.log("indexOf():", array13.indexOf(5)); // Output: 1

// Método: join()
// Une todos los elementos de un array en una cadena.
const array14 = ['H', 'o', 'l', 'a'];
console.log("join():", array14.join('')); // Output: 'Hola'

// Método: keys()
// Devuelve un nuevo objeto Array Iterator que contiene las claves de índice para cada elemento en el array.
const array15 = ['a', 'b', 'c'];
const iterator2 = array15.keys();
console.log("keys():", iterator2.next().value); // Output: 0

// Método: lastIndexOf()
// Devuelve el último índice en el que se encuentra un elemento dado en el array, o -1 si no está presente.
const array16 = [2, 5, 9, 2];
console.log("lastIndexOf():", array16.lastIndexOf(2)); // Output: 3

// Método: map()
// Crea un nuevo array con los resultados de la llamada a una función para cada elemento del array.
const array17 = [1, 4, 9, 16];
const map1 = array17.map(x => x * 2);
console.log("map():", map1); // Output: [2, 8, 18, 32]

// Método: pop()
// Elimina el último elemento de un array y lo devuelve.
const array18 = [1, 2, 3];
console.log("pop():", array18.pop()); // Output: 3

// Método: push()
// Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
const array19 = [1, 2, 3];
console.log("push():", array19.push(4, 5)); // Output: 5

// Método: reduce()
// Aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor.
const array20 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log("reduce():", array20.reduce(reducer)); // Output: 10

// Método: reduceRight()
// Aplica una función a un acumulador y a cada valor de un array (de derecha a izquierda) para reducirlo a un único valor.
const array21 = [1, 2, 3, 4];
const reducerRight = (accumulator, currentValue) => accumulator + currentValue;
console.log("reduceRight():", array21.reduceRight(reducerRight)); // Output: 10

// Método: reverse()
// Invierte el orden de los elementos de un array.
const array22 = [1, 2, 3];
console.log("reverse():", array22.reverse()); // Output: [3, 2, 1]

// Método: shift()
// Elimina el primer elemento de un array y lo devuelve.
const array23 = [1, 2, 3];
console.log("shift():", array23.shift()); // Output: 1
console.log(array23); // Output: [2, 3]
