document.getElementById("palabra1").addEventListener("click", function (event) {
    event.preventDefault()
});

alert("El juego consiste en adivinar la palabra de cinco letras")
var listado = [
    "AGUDO",
    "ALADO",
    "ALBAS",
    "ALTAR",
    "ADIOS",
    "LINDO",
    "AVALA",
    "BABAS",
    "VACAS",
    "BACHE",
    "BAJES",
    "BALAS",
    "CELIA",
    "CENAS",
    "CEPAS",
    "CERCA",
    "CERCO",
    "DEJAR",
    "DEJES",
    "DENSO",
    "DICES",
    "DIVOS",
    "DOTES",
    "DUNAS",
    "FALTO",
    "FERIA",
    "FETOS",
    "FIJOS",
    "FILAS",
    "JUEGO"
]


var k = getRandomIntInclusive(1, 29);

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
k = k.toString();

var palabra = listado[k];
var pElement = document.getElementById("areaContador");
var contador = 0;

palabra = palabra.toUpperCase();

function letrasAcertadas() {
    contador++;
    pElement.textContent = contador;

    let j = 0
    for (let i = 0; i < 5; i++) {
        let impLetra = document.forms[0].elements[i].value
        let letraStyle0 = document.getElementById(i);

        impLetra = impLetra.toUpperCase();
        if (palabra[i] == impLetra) {

            letraStyle0.style.backgroundColor = 'rgba(5, 95, 65, 0.679)';

            j++

        } else {
            letraStyle0.style.backgroundColor = 'rgba(255, 0, 0, 0.371)';
        }
    }

    if (j == 5) {
        document.getElementById("ganaste").innerHTML = "¡¡ADIVINASTE!!";
    }

}

let btn = document.querySelector('#btnAceptar')

btn.onclick = letrasAcertadas;

function borrarValue() {
    window.location.reload()
}

function meRindo(){
    document.getElementById("ganaste").innerHTML = "LA PALABRA ES: " + palabra;
}

