function sumarElementos(array){
    let suma = 0;
    for (const i of array) 
        suma += i;
    return suma;
}
let numeros = [1, 2, 3, 4, 5, 6];
let sumaTotal = sumarElementos(numeros);
console.log("suma: " + sumaTotal);