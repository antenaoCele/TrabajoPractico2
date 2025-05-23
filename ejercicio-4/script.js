//guardo el contenido de los input en variables 
const peso = document.getElementById("peso")
const estatura = document.getElementById("estatura")
const enviar = document.getElementById("enviar")

//evento click que funciona al presionar boton enviar
enviar.addEventListener('click', () => {

    const estaturaCuadrado = estatura.value * estatura.value
    const resultado = peso.value / estaturaCuadrado
    console.log(resultado)
    alert("IMC: " + resultado)
    peso.value = "";
    estatura.value = "";

})