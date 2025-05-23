// Accedo a cada campo y guardo el contenido en variables 
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const edad = document.getElementById("edad");
const altura = document.getElementById("altura");
const correo = document.getElementById("correo");
const boton = document.getElementById("boton");
const error = document.getElementById("error");
const bien = document.getElementById("bien");

// Evento click al presionar el botón enviar
boton.addEventListener("click", (event) => {

    let mensajes = [];

    // Validación para nombre
    if (nombre.value === "") {
        mensajes.push("El campo 'Nombre' no puede estar vacío.");
    } else if (nombre.value.length > 50) {
        mensajes.push("El campo 'Nombre' no puede tener más de 50 caracteres.");
    }

    // Validación para apellido
    if (apellido.value === "") {
        mensajes.push("El campo 'Apellido' no puede estar vacío.");
    } else if (apellido.value.length > 50) {
        mensajes.push("El campo 'Apellido' no puede tener más de 50 caracteres.");
    }

    // Validación para edad
    if (Number(edad.value) < 18) {
        mensajes.push("La 'Edad' debe ser un número igual o mayor a 18.");
    }

    // Validación para altura
    if (altura.value === "" || Number(altura.value) <= 0 || Number(altura.value) > 230) {
        mensajes.push("La 'Altura' debe estar entre 1 y 230 cm.");
    }

    // Validación para correo
    let contieneArroba = false;
    for (const caracter of correo.value) {
        if (caracter === "@") {
            contieneArroba = true;
            break;
        }
    }

    if (correo.value === "") {
        mensajes.push("El campo 'Correo' no puede estar vacío.");
    } else if (!contieneArroba) {
        mensajes.push("El 'Correo' debe contener el símbolo @.");
    }

    // MOSTRAR MENSAJES FINALES
    if (mensajes.length > 0) {
        error.innerHTML = "";
        for (let i = 0; i < mensajes.length; i++) {
            error.innerHTML += mensajes[i] + "<br>";
        }
        bien.innerHTML = "";
    } else {
        error.innerHTML = "";
        bien.innerHTML = "Todos los campos fueron rellenados con éxito.";
    }
});
