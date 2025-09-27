// los parametros se ponen en los paréntesis de la función
function add(num1, num2) {
  console.log(num1 + num2);
};

add(5, 15); // Estos valores que se envian a la funcion se llaman argumentos
add(7, 85);
add(3, 20);
add(7, 7);
add(5, 5);

// ================

// Ejemplo cuando NO se colocan argumentos, se colocan por defecto los valores en los parámetros.
function add2(num7 = 35, num8 = 10) {
  console.log(num7 - num8);
};
add2();

// ================
// Función que retorna un valor
function add4(num9, num10){
  return num9 * num10;
};
const result = add4(4, 5);
console.log(result);

// Función para agregar el impuesto a pagar
function calculateTax(total){
  return 1.19 * total;
};

// Variable global para acumular el total del carrito
let total = 0;

function addShoppingCart(price) {
  total = total + price; // Aqui si vamos acumulando
  return total;
};

// Agregar productos al carrito
total = addShoppingCart(800);
total = addShoppingCart(500);
total = addShoppingCart(200);
total = addShoppingCart(900);

console.log(`La suma de los productos sin impuesto es: ${total}`);
const totalToPay = calculateTax(total);
console.log(`La suma de los productos más el impuesto es: ${totalToPay}`);