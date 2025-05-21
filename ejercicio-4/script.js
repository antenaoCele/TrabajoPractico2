const peso = document.getElementById("peso")
const estatura = document.getElementById("estatura")
const enviar = document.getElementById("enviar")

enviar.addEventListener('click', () => {
    console.log(parseFloat(peso.value))
    console.log(parseFloat(estatura.value))

    const calculo = () => {
        const estaturaCuadrado = estatura.value * estatura.value
        const resultado = peso.value / estaturaCuadrado
        console.log(resultado)
        alert("IMC: " + resultado)
        peso.value = "";
        estatura.value = "";
    }
    calculo()
})