//Estructura switch 
//permite ayudar una expresion y ejecutar diferentes bloques de codigo, segun 
//el caso que coincida
const paymentMethod = 'bitcoin';

switch (paymentMethod) {
    case 'card':
        console.log('pagaste con targeta');
        break;
    case 'bitcoin':
        console.log('pagaste con bitcoin');
        break
    case 'debitCard':
        console.log('pagaste con targeta de debito');
        break;
    case 'creditCard':
        console.log('pagaste con targeta de credito');
        break;

    default:
        console.log('Metodo de pago No Valido');
}