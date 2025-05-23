
//guardo el contenido de los input en sus respectivas variables
const A = document.getElementById("A");
const B = document.getElementById("B");
const C = document.getElementById("C");

//accedo al parrafo
const textoResultado = document.getElementById("resultado");

//creo un evento click para el boton
const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
    const alturaTriangulo = A.value - C.value;
    const areaTriangulo = (alturaTriangulo * B.value) / 2;
    const areaRectangulo = B.value * C.value;
    const areaTOTAL = areaRectangulo + areaTriangulo;

    //validaciones de los campos (opcionales)
    if (A.value === "" || B.value === "" || C.value === "") {
        alert("Debes ingresar valores en los 3 campos")

    } else if (A.value <= 0 || B.value <= 0 || C.value <= 0) {
        textoResultado.innerHTML = "Debes ingresar numeros mayores a 0 "
    } else {
        textoResultado.innerHTML = "El area de su terreno es: " + areaTOTAL;
    }

    //los campos vuelven a estar vacios
    A.value = "";
    B.value = "";
    C.value = "";
})

