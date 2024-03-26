let cadena = "   Hola Mundo!   ";

// charAt(index): Devuelve el carácter en la posición especificada.
console.log("charAt(index):", cadena.charAt(6)); // Output: M

// charCodeAt(index): Devuelve el valor Unicode del carácter en la posición especificada.
console.log("charCodeAt(index):", cadena.charCodeAt(6)); // Output: 77

// concat(string2, string3, ...): Combina dos o más cadenas y devuelve una nueva cadena.
console.log("concat(string2, string3, ...):", cadena.concat(" Qué tal?", " Todo bien?")); // Output: "   Hola Mundo!    Qué tal? Todo bien?"

// includes(searchString, position): Determina si una cadena contiene los caracteres de otra cadena.
console.log("includes(searchString, position):", cadena.includes("Mundo")); // Output: true

// endsWith(searchString, length): Comprueba si una cadena termina con los caracteres de otra cadena.
console.log("endsWith(searchString, length):", cadena.endsWith("Mundo")); // Output: false

// indexOf(searchValue, fromIndex): Devuelve el índice de la primera aparición de un valor especificado en una cadena.
console.log("indexOf(searchValue, fromIndex):", cadena.indexOf("Mundo")); // Output: 9

// lastIndexOf(searchValue, fromIndex): Devuelve el índice de la última aparición de un valor especificado en una cadena.
console.log("lastIndexOf(searchValue, fromIndex):", cadena.lastIndexOf("o")); // Output: 11

// localeCompare(compareString): Compara dos cadenas en la configuración regional actual.
console.log("localeCompare(compareString):", cadena.localeCompare("Hola")); // Output: 1

// match(regexp): Busca una cadena para una coincidencia con una expresión regular y devuelve un array con la información de la coincidencia.
console.log("match(regexp):", cadena.match(/Mundo/)); // Output: ["Mundo", index: 9, input: "   Hola Mundo!   ", groups: undefined]

// matchAll(regexp): Devuelve un iterador de todas las coincidencias de una cadena con una expresión regular.
console.log("matchAll(regexp):", [...cadena.matchAll(/o/g)]); // Output: [Array(2), Array(1), Array(1)]

// normalize(form): Devuelve la forma normalizada de la cadena.
console.log("normalize(form):", cadena.normalize()); // Output: "   Hola Mundo!   "

// padEnd(targetLength, padString): Rellena la cadena con un número específico de caracteres al final.
console.log("padEnd(targetLength, padString):", cadena.padEnd(20, '.')); // Output: "   Hola Mundo!   ..."

// padStart(targetLength, padString): Rellena la cadena con un número específico de caracteres al principio.
console.log("padStart(targetLength, padString):", cadena.padStart(20, '.')); // Output: "...   Hola Mundo!   "

// repeat(count): Devuelve una nueva cadena que contiene la concatenación de la cadena original repetida un determinado número de veces.
console.log("repeat(count):", cadena.repeat(2)); // Output: "   Hola Mundo!      Hola Mundo!   "

// replace(searchValue, newValue): Reemplaza parte de una cadena con otra cadena o valor.
console.log("replace(searchValue, newValue):", cadena.replace("Mundo", "Universo")); // Output: "   Hola Universo!   "

// replaceAll(searchValue, newValue): Reemplaza todas las apariciones de una cadena con otra cadena o valor.
console.log("replaceAll(searchValue, newValue):", cadena.replaceAll("o", "0")); // Output: "   H0la Mund0!   "

// search(regexp): Busca una cadena para una coincidencia con una expresión regular y devuelve la posición de la coincidencia.
console.log("search(regexp):", cadena.search(/Mundo/)); // Output: 9

// slice(startIndex, endIndex): Extrae una parte de una cadena y devuelve una nueva cadena.
console.log("slice(startIndex, endIndex):", cadena.slice(3, 8)); // Output: "a Mun"

// split(separator, limit): Divide una cadena en un array de subcadenas.
console.log("split(separator, limit):", cadena.split(" ")); // Output: ["", "", "", "Hola", "Mundo!", "", ""]

// startsWith(searchString, position): Comprueba si una cadena comienza con los caracteres de otra cadena.
console.log("startsWith(searchString, position):", cadena.startsWith("Hola")); // Output: false

// substr(startIndex, length): Extrae una parte de una cadena, comenzando en el índice especificado y hasta la longitud indicada.
console.log("substr(startIndex, length):", cadena.substr(3, 8)); // Output: "a Mundo!"

// substring(startIndex, endIndex): Extrae los caracteres entre dos índices de una cadena.
console.log("substring(startIndex, endIndex):", cadena.substring(3, 8)); // Output: "a Mun"

// toLocaleLowerCase(): Devuelve la cadena convertida a minúsculas según la configuración regional actual.
console.log("toLocaleLowerCase():", cadena.toLocaleLowerCase()); // Output: "   hola mundo!   "

// toLocaleUpperCase(): Devuelve la cadena convertida a mayúsculas según la configuración regional actual.
console.log("toLocaleUpperCase():", cadena.toLocaleUpperCase()); // Output: "   HOLA MUNDO!   "

// toLowerCase(): Devuelve la cadena convertida a minúsculas.
console.log("toLowerCase():", cadena.toLowerCase()); // Output: "   hola mundo!   "

// toString(): Devuelve el valor de la cadena.
console.log("toString():", cadena.toString()); // Output: "   Hola Mundo!   "

// toUpperCase(): Devuelve la cadena convertida a mayúsculas.
console.log("toUpperCase():", cadena.toUpperCase()); // Output: "   HOLA MUNDO!   "

// trim(): Elimina los espacios en blanco del principio y del final de la cadena.
console.log("trim():", cadena.trim()); // Output: "Hola Mundo!"

// trimEnd(): Elimina los espacios en blanco del final de la cadena.
console.log("trimEnd():", cadena.trimEnd()); // Output: "   Hola Mundo!"

// trimStart(): Elimina los espacios en blanco del principio de la cadena.
console.log("trimStart():", cadena.trimStart()); // Output: "Hola Mundo!   "





