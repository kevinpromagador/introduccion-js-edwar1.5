// cuando se unen dos objetos lo ideal es no modificar ninguno de los objetos

const product ={
    productName : "sensor de humedad",
    price : 300,
    available : true,
};

Object.freeze(product);

// Objeto que almacena medidas
const measurements = {
    weight : "1kg",
    measurements : "10cm",
};

// Rest operator , consta de tres puntos (...)
const newProduct = { ...product,...measurements};
console.log(product);
console.log(newProduct);

const producto = {
    productName : "vehicle",
    model : "2006",
    brand : "Chevrolet Corsa",
    plate : "AK310A2",
};
