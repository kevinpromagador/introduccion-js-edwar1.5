// notification API
// la notificacion de api es un interfaz del navegador que permite a las aplicaciones web mostrar notificaciones nativas del sistema operativo, incluso cuando la pestaña No esta activa.

const button = document.querySelector(".button");

button.addEventListener("click", () => {
     console.log ("you made click");

    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            new Notification("es un notificacion de el lindo de kevin"), {
                body : "Aprendiendo JS en el SENA"

            };
        }else {
            console.log("permiso denegado");
        }




    });


});