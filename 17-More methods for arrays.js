// More methods
// Este arreglo se creó usando el constructor
const month = new Array("January", "February", "March", "May", "June");


// Este No tiene constructor
const shoppingCart = [
  {productName:"Smart TV 60",price:3000},
  {productName:"Smart TV 60",price:1000},
  {productName:"Tablet",price:2000},
  {productName:"Google assistand",price:2500},
  {productName:"Play Station",price:4000},
  {productName:"Will",price:8000},
  {productName:"Mouse",price:7000},
]

// Recorrer el arreglo con un forEach para que muestre todos los elementos
// En este caso months es un parámetro
month.forEach(function(month) {
  console.log(month);
});

month.forEach(function(month1) {
  if (month == 'May') {
    console.log("The month of may exist in the array");
  }else{
    console.log("Does't exist");
  }
});

// Buscar en un arreglo si algo existe, si existe devuelve true si no un false.
const result = month.includes('June');
console.log(result);

// En JS includes No funciona bien con los objetos
const result2 = shoppingCart.includes('Tablet');
console.log(result2);


const num = 5 == 5;
console.log ("igualacion doble", num);

// Con igualacion doble solo compara el valor por eso en el navegador tenemos
// un true.
const num2 = 5 == "5";
console.log('Igualacion doble', num2);

// Con igualacion triple verifica si es de el mismo valor y tipo.
const num3 = 5 === "5";
console.log('Igualacion doble', num3);

// ======================

// En conclusion para un arreglo plano se usa includes y para un arreglo con
// objbetos se usa some.
// const result4 = shoppingcar.some (function(product){
//  return product.productName === "Mouse"
// });

// console.log(result4)

// Hace lo mismo que el codigo anterior pero mas corto con arrow function
let result4 = shoppingCart.some(product => product.productName === "Play station");

console.log(result4);

// Sumar todos los precios del carrito de compras
result5 = shoppingCart.reduce(function(total, product){
  return total + product.price
}, 0 );
console.log(result5)

// Lo mismo pero con funcion flecha
result6 = shoppingCart.reduce((total, product) => total + product.price, 0)
console.log(result6);

// ======================
result5 = shoppingCart.filter(function(product){
  return product.price < 700
});

result5 = shoppingCart.filter(function(product){
  return product.productName === "Sound-bar"
});

console.log(result5)

result5 = shoppingCart.filter (product => product.price > 50);

console.table(result5)

// Lo mismo pero con funcipon flecha
result5 = shoppingCart.filter (product => product.productName === "Sound-bar")
console.log(result5)

// Todos excepto un tipo
result5 = shoppingCart.filter(function(product){
  return product.productName != "Sound-bar"
});
console.table(result5)

result5 = shoppingCart.filter ( product => product.productName != "Sound-bar")
console.table(result5)