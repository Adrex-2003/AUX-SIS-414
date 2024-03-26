let array = [];
let tamañoArray = prompt("Digite la cantidad de elementos a añadir en el arreglo:");

while(tamañoArray > 0){
    array.push(prompt());
    tamañoArray --;
}

if(array.length > 5)
    console.log("El array es grande");
else
    console.log("El array es pequeño");