// Los booleanos tiene dos valores falso y verdadero

let age = 42;
let isOlderthan = age >= 18
console.log (isOlderthan);
let username = "Kevin";

let haveName = username != "";

console.log(haveName);
// ===========
// En JS 0 es falsy, pero cualquier numero distinto de cero es turthy
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(10));
console.log(Boolean(-5));
console.log(typeof Boolean(-5));

// ===========
// En JS null or undefined siempre se convierte en false
let nullValue = null;
let undefinedValue;
console.log(Boolean(nullValue));
console.log(Boolean(undefinedValue));
// ===========
// Los booleanos son la base de las decisiones
let haveAcces = false;

if (haveAcces) {
  console.log("Welcome to system");
}else{
  console.log("Denied access");
}