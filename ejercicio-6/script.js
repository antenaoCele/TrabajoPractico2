const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const edad = document.getElementById("edad");
const altura = document.getElementById("altura");
const correo = document.getElementById("correo");
const boton = document.getElementById("boton");
const error = document.getElementById("error");
const bien = document.getElementById("bien");



boton.addEventListener("click", () => {

    let estado = true;

    if (nombre.value === "" || apellido.value === "" || nombre.value.length > 50 || apellido.value.length > 50) {
        estado = false;
    } else if (edad.value < 18) {
        estado = false;
    } else if (altura.value <= 0 || altura.value > 230) {
        estado = false;
    }

    let contieneArroba = false;
    for (const caracter of correo.value) {
        if (caracter === "@") {
            contieneArroba = true;
            break;
        }
    }
    if (!contieneArroba) {
        estado = false;
    }

    if (correo.value === "") {
        estado = false
    }

    if (estado === false) {
        error.innerHTML = "hay errores en los campos, vuelve a llenarlos";
        nombre.value = "";
        apellido.value = "";
        edad.value = "";
        altura.value = "";
        correo.value = "";
    } else {
        error.innerHTML = "";
        bien.innerHTML = "Todos los campos fueron rellenados con exito"
    }
})

