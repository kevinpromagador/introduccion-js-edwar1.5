// El objeto literal es una forma muy comun, pero no es muy dinamicoque digamos
//De esta forma el objeto tiene diferentes variables

const product = {
    productName : "mouse",
    productName : "mouse",
    productPrice : 50000,
    productColor : "red",
}

//Asi se crea un segundo objeto literal
const product2 = {
    productName : "Keyboard",
    productPrice : 80000,
    productColor : "blue",
}

//===========================


//objetos constructor 
// Este objeto constructor debe contener todos los diferentes valores que van a formar parte del objeto
// En los parentesis de la funcion llegan los parametros 
function Product (productName, productPrice, productColor){
    this.productName = productName;
    this.productPrice = productPrice;
    this.productColor = productColor;
}


const product3 = new Product ("mouse", 35000, "green");
const product4 = new Product ("Cell phone", 45000, "Black");
const product5 = new Product ("PC", 500000, "White");


console.log(product3);
console.log(product4);
console.log(product5);

