// alert("¡Estoy en Hello World!");
// Convenciones para nombrar variables

// Camel Case
// UpperCamelCase -> Se usa para nombrar las clases en JS
// lowerCamelCase -> Se usa para nombrar las variables JS
// SCREAMING_SNAKE_CASE -> Se usa para nombrar variables constantes
// CAJA_KEBAB -> Se usa para nombrar archivos multimedia en JS

// Snake_case -> Generalmente usado para nombrar variables en el python

// Caja-De-Tren -> variante del Kebab-case

// ya no se usa var para declarar variables, actualmente se usa let
// en JS no es obligatorio indicar al tipo de variable
// JS se puede o NO usar el punto y coma al final de una sentencia

var product = "sensor-1";
var product2 = "sensor-2";

console.log(product);
console.log(product2);

// No se puede iniciar una variable con un guion medio
// No se puede iniciar una variable con un numero
// var 1sensor = "sensor 4"

var _sensor = "sensor-5";

// si esta permitido iniciar una variable con guion al piso
console.log(_sensor);

// crear una variable de las tres formas distintas
// var sensor10 = "sensor de lluvia";
// const sensor10 = "sensor de lluvia";
let sensor10 = "sensor de lluvia";

console.log(sensor10);

// ejemplo con var
// var sensor 11 = "sensor de humedad"
// var sensor 11 = "sensor de luz"

// var username = "kevin"
// console.log(username) = "kevin"


// Usando la declaracion const no se puede cambiar su valor
const maxSize = 1024;

maxSize2 = 2048;

console.log(maxSize);
console.log(maxSize2);