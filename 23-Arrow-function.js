// Arrow funtion 
// EN js es una forma mas corta de escribir funciones usando la sintaxis () = >

//sintaxis mas breve, este ideal para funciones pequeñas
// NO tiene su propio this, hereda el this del contexto donde se define.

//funcion sin parametros 
const add = function(){
    console.log(16+3);
}

add();

//Funcion con parametros
const add2 = function(num1, num2){
    console.log(num1 + num2);
}
add2(4, 8);

// Las llaves son opcionales cuando despues de fecha solo tengo una sentencia
const add3 = (num3, num4) => console.log(num3 + num4);


add3(6, 9);

// otro Ejemplo
const learn = (tecnology) => {
    console.log (`Aprendiendo ${tecnology}`)
}



const month = ["January", "February", "March", "May", "June", "November", "December"];


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
month.forEach( month=> {
    if(month == 'November' || month == "December"){
        console.log('Se verifico en el arreglo y el mes si existe');
    }else{
        console.log('El mes no existe');
    }
});




const result = shoppingCart.some(product => product.price === 800);
console.log(result);


// arrow function

const result3 = shoppingCart.reduce(( total, product) => total + product.price,
0)

console.log(result3);

// Declararse
const result6 = shoppingCart.filter (product => product.price < 600)

console.log(result6);


//-------------------------

//function greet(userName){
    //console.log(`Hello ${userName}`);

//}
//console.log(greet("kevin"));

//-----------
greet = userName => (`hello ${userName}`)
console.log (greet("kevin Castro"));

//========================================

// const boost = num => num * num;
// console.log(boost(8))

const boost2 = num => Math.pow(num, 2);
console.log(boost2(200));

//==========================================

// Arrow function con retorno explicito


// Se usa cuando el cuerpo de una funcion tiene llaves{}
const add10 = (num4, num5) => {
    const result7 = num4 + num5;
    return result7;
}

console.log(add10(15, 7))

//========================================
// retonrno implicito, cuando la funcio no tiene llaves realiza el retorno implicitamente 
const add11 = (num6, num7) => num6 + num7;
console.log(add11(4, 6));








