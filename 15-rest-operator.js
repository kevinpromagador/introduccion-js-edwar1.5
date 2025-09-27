// Rest operator o spread operator

// lo que se busca es NO NO modificar el arreglo original.

const months = ['december', 'november', 'march'];
console.log(months);

// Se crea un nuevo arreglo y lo unimos con otro
const newArray = [...months, 'January'];

// El nuevo arreglo se puede agregar al inicio o al final
const newArray2 = ['January', ...months];
const newArray3 = [...months, 'January'];

console.table(newArray);
console.table(newArray2);

const newArray4 = [...months, 'May'];
const newArray5 = ['May', ...months];

months.unshift('May');