/**
 * fetch API: Es una funciones en js que permite g¿hacer repeticiones HTTP, incluyendo GET, POST, DELETE, etc. Es una API moderna.
 * 
 * 
 * 
 */

function getEmployees(){
    // fecth('Aqui se copia la URL, https://www.youtube.com/');
    // Aunque para este caso estamos haciendo una peticion aun archivo local
    fetch ("/data/employees.json");

    const file = "/data/employees.json";

    fetch(file)

    //Obtenemos los datos 
        .then((result) => {
            return result.json();


    })

    //Este then es para acceder a los datos 

    .then( data  => {

        const {employees} = data;

        employees.forEach(employees => {
            console.log(employees.id);
            console.log(employees.user);
            console.log(employees.job

            );
            

            document.querySelector('.content').textContent += employees.user
        });

        

        console.log(employees);

    })

    




}

getEmployees();