
const calculoIva = () => {
    let numero = prompt("Ingrese un numero: ")
    document.getElementById("respuesta").innerHTML = "El numero sin IVA es: " + numero

    let numeroIVA = numero*1.21
    document.getElementById("respuestaIVA").innerHTML = "El numero con IVA es: " + numeroIVA;
}


