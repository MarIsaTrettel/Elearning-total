document.getElementById("palabra1").addEventListener("click", function(event){
    event.preventDefault()
  });

var palabra = prompt("Ingrese una palabra de 5 letras: ");


function letrasAcertadas() {
let j = 0  
for(let i=0; i<5; i++){
let impLetra0 = document.forms[0].elements[i].value
let letraStyle0 = document.getElementById(i);

    if (palabra[i] == impLetra0) {

        letraStyle0.style.backgroundColor='green';
        j++

    }else{
        letraStyle0.style.backgroundColor='orange';
    }}

    if (j == 5){
        alert ("ganaste")
    }

}

let btn = document.querySelector('#btnAceptar')

btn.onclick = letrasAcertadas;