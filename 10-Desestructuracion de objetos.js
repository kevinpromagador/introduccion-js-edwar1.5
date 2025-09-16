// Kevin Andres Castro Duke, Desestructuracion de objetos

const product = {
    productname : "sensor de humedad",
    price : 300,
    available : true,
}

// Kevin Andres Castro Duke Aqui un ejemplo de desestructuracion de objetos

const productprice = product.price;
const productName = product.productname;

console.log (productprice);
console.log (productName);

// Kevin Andres Castro Duke ¿para que sirve el Destructuring? Sirve para
//extraer los valores de un objeto

const {price, available, productname} = product;
console.log (price, available, productname)
