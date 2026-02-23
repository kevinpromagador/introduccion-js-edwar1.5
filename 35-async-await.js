

/**  Async await
 * 
 * 
Son caracteristicas de JS que facilitan trabajar con funciones asíncronas, permitiendo escribir codigo que se parece mas al sincrono y mas facil de leer
Antes del 2015 se ysaba .then() y catch(), pero ahora se usa async y await, que internamente siguen usando promesas
async: Declara una función asincronica, que siempre devuelve una promesa
await: Pausa la ejecucion de lafunción async hasta que una promesa se resuleve rechaza, devolviendo como resultado una primera.
 */

// ==========================================================

// Ejemplo con una funcion que se cumple

function downloadNewClients(){

    return new Promise(resolve => {
        console.log("Descargando clientes... espere por favor")

        setTimeout(()=>{
        resolve("Los clientes fueron descargados")
    }, 2000);
    })
};


async function app() {
    try {
        const result = await downloadNewClients();

        // Codigo bloqueado hasta que se resuelva la promesa
        // console.log("Codigo que si se bloquea");
        console.log(result);
    
    } catch (error) {
        console.log(error);
    } 

};

app();
// console.log("Codigo que no se bloquea");

// ==========================================================

function downloadLastOrders(){

    return new Promise(resolve => {
        console.log("Descargando pedidos... espere por favor")

        setTimeout(()=>{
        resolve("Los pedidos fueron descargados")
    }, 7000);
    })
};

async function app() {
    try {
        // const result = await downloadLastOrders();

        console.log("Codigo que si se bloquea");
        // console.log(result);

        // Ahora  se va a intentar  una forma mas eficiente sin que dependa una de la otra

        const result = await Promise.all ([downloadNewClients(), downloadLastOrders()])
        console.log(result[0]);
        console.log(result[1]);

    } catch (error) {
        console.log(error);
    } 

};

app();
console.log("Codigo que no se bloquea");