// Functions in JS
// Qué es Hoisting?
// Hoisting en JS es el comportamiento por defecto en el que el interprete "mueve" las declaraciones (de variables y funciones) a la parte superior de su ámbito (scope) antes de ejecutar el codigo.
// Esto significa que puedes usar una función o variable declarada, antes de escribirla en el código.

// Declaración de una función
function add (){
  console.log(10 + 10);
}
add();

// función add (){
//  console.log(10 + 20);
// };

// ======================

// La expresión de una función
// La expresión de la función solo puede llamarse despues de la creación
const sumar2 = function(){
  console.log(3 + 3);
};
sumar2();

// ======================
// IIFE (Immediately Invoked Function Expression), esta función se llama a si misma.
// Son utiles para proteger las variables para que no mezclan con las variables de otros archivos
(function(){
  console.log("Esta es una función IIFE");
})();

// una función IIFE con parametros
(function(name){
  console.log("Hello ${kevin Castro}");

})('kevin castro');
// console.log(client)
