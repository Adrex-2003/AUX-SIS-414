/*Una función flecha en JavaScript es una característica que proporciona una sintaxis más concisa 
y simplificada para definir funciones. En lugar de utilizar la palabra clave function, las funciones
 flecha se definen utilizando una sintaxis de flecha =>.*/ 
 
let funcionflecha = (a, b) => {
    return a + b;
};

let suma = funcionflecha(10, 20);
console.log("suma: " + suma);