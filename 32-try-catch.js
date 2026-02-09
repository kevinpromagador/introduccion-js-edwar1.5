// try catch
// Es una estructura para manejar errores en tiempo de ejecucion, permitiendo que el programa continue ejecutandose sin fallar completamente.
// try: dentro de este bloque que puede generar un error.
//catch: captura el error si ocurre dentro de try y permite manejarlo.
const num1 = 20;
const num3 = 30;

console.log(num1);

try {
    console.log(num2);
} catch (error) {
    console.log("error, la variable no existe");

}
console.log(num3);

//======================================================

//ejercicio 2 

try {
    console.log(x);
} catch (error) {
    console.log("ocurrio un error,x is not defined");
}




//========================================================
// throw lanza manuealmente un error

function divide(num5, num6){
    try {
    if (num6 === 0) throw ("No se puede dividir entre cero");
    return num5 / num6;

} catch (error) {
    return "Error", error;
}

}
console.log(divide(10, 0));


