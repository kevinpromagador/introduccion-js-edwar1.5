// Arrays en JS
const numbers= [10,20,30,40,50];

console.log(numbers);

// Otra forma de visualización en tabla
console.table(numbers);

// Crear un arreglo con el constructor
const months = new Array("May", "January", "July", "June");
console.log(months);

const miArray = ["Hello", 19, true, false, null, {myName: "Kevin", myJob: "Apprentice"}, [3172293]];

// Consultar un elemento de un arreglo
console.log(typeof numbers [21]);
console.log(miArray[5]);

// Método para conocer la longitud de un arreglo
console.log(`Kevin tu arreglo tiene:  ` + numbers.length + " elementos");

// Un iterador con forEach
const numbers2 = [10, 20, 30, 40, 50];
numbers2.forEach(function(number){
    console.log(number);
})

months.forEach(function(month){
    console.log(month);
})

miArray.forEach(function(element){
    console.log(element);
})
