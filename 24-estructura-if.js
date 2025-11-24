// Estructura de control IF
// score =  Number(prompt(`Ingrese el puntaje`));
// const 
// // if (score == 100) {
//     console.log(`Si le puntaje es 100`);

// }else{
//     console.log(`El puntaje es diferente de 100`);
// }

//===============


// if (score !== 100) {
//     console.log(`El puntaje es diferente de 100`);

// }else{
//     console.log(`Si le puntaje es 100`);
// }

//======================
const rol = String(prompt('Ingrese su rol'))

if(rol == 'admin') {
    console.log('tienes acceso a todo el sistema');
}else if(rol == 'editor'){
    console.log('puedes editar funciones basicas');
}else{
    console.log('No tienes acceso al sistema');
}


