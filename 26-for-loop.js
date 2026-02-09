//forEach  map son métodos exclusivos de arreglos

const shoppingCart = [
{productName:"Smart TV 60",price:3000},
{productName:"Smart TV 60",price:1000},
{productName:"Tablet",price:2000},
{productName:"Google assistand",price:2500},
{productName:"Play Station",price:4000},
{productName:"Will",price:8000},
{productName:"Mouse",price:7000},
]

// Recorrer un arreglo por cada elemento
//shoppingCart.forEach(function(product){
//console.log(product);
//});

// Acceder a un elemento específico
//shoppingCart.forEach(function(product){
//console.log(product.price);
//});

// Acceder a un elemento específico
//shoppingCart.forEach(function(product){
//console.log(product.productName);
//});

// Acceder a un elemento específico
//hoppingCart.forEach(function(product){
//console.log(product.color);
//});


//==========

// Ahora forEach con arrow funtion

// Recorrer un arreglo por cada elemento
//shoppingCart.forEach(product => console.log(product));

//shoppingCart.forEach(product => console.log(product.price));

//shoppingCart.forEach(product => console.log(product.productName));

//shoppingCart.forEach(product => console.log(product.color));


const array =shoppingCart.map( product => `El nombre del producto es: ${product.productName} - ${product.price}`);

console.log(array);




