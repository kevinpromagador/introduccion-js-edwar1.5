"use stric"

const number = [0, 5, 8, 9, 5]; // No importa que tan grande sea el arreglo siempre será un elemento
// Agregar elementos a mi arreglo , pero con este método se requiere conocer la longitud del arreglo

// numbersLenght = number.length
// console.log(numberLenght);
// number [numberLenght] = 100;
// numbers [5] = 100;

// console.log(numbers);

// numbers.push(700);
// console.log(numbers);

// Con el método pus se agregan elementos finales
numbers.push(700,800);
console.log(numbers);

// Métodos unshit para agregar elementos al inicio
numbers.unshift(-1, -2, -3);
console.log(numbers)

// Método para eliminar el último elemento
number.pop(numbers)
console.table(numbers);

// Métodos shift para eliminar el primer elemento de mi arreglo
numbers.shift();
console.table(numbers);

// Método splice elimina todos los elementos a partir del índice asignado.-
number.splice(2);
console.table(numbers);
