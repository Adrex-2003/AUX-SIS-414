var global = "Hola ";

function funcion(){
    let local = "Mundo ";
    console.log(global + local);
}

funcion();  // Es posible acceder a ambas variables dentro de la función.

// No  se puede acceder a la variable declarada o definida dentro 
// de la función fuera de ella, debido a que tiene un ámbito local;
// la sgte. línea genera un error
//console.log(global + local);

//una posible solucion:
function funcion2(){
    var local = "mundo !!!";
    return local;
}

var variableLocal = funcion2();
console.log(global + variableLocal);