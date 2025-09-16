// Kevin Andres Castro Duke, metodos para los objetos
// Con esta linea de codigo garantizo buenas practicas
"use strict";

const product = {
    productname : "sensor de humedad",
    price : 300,
    available : true,
}

const speedmax = 88;
//speedMax = 70
console.log (speedmax);

// Aunque el objeto product este declarado como constante permite agregar propiedades

product.quantity = 42;
console.log (product);

// Con el metodo o funcion freeze bloqueamos el objeto para que no se puedan
// agregar mas propiedades o eliminarlas.
// Object.freeze (product);

// Si usamos el metodo seal no podemos agregar ni eliminar pero si se puede
// modificar o editar una propiedad

Object.seal(product)

// Vamos a agregar una nueva propiedad color
//product.color = "red";

// console.log ("El objeto esta bloqueado?: " + Object.isFrozen (product))
// Let response;
// if (Object.isFrozen(product)){
//     response = "Si"
// }else {
//     response = "No"
// }

// console.log (*¿el objeto esta bloqueado?: "+ response);

// eliminar una propiedad de un objeto
//delete product,price;
//console.log (product);

//modificar o editar las propiedades de un objeto
//product.productName = "sensor de PH"


