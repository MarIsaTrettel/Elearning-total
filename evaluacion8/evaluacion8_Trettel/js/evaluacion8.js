
var ejecutarForm = () => {
    let datoUsuario = document.forms[0].elements[0].value
    let datoNombre = document.forms[0].elements[1].value
    let datoApellido = document.forms[0].elements[2].value
    let datoEdad = document.forms[0].elements[3].value
    let datoFechaDeNacimiento = document.forms[0].elements[4].value
    let datoEmail = document.forms[0].elements[5].value

    alert("Usuario: " + datoUsuario + "\nNombre: " + datoNombre + "\nApellido: " + datoApellido + "\nEdad: " + datoEdad + "\nFecha de nacimiento: " + datoFechaDeNacimiento + "\nEmail: " + datoEmail)
}

var validacion = () => {
    let password1 = document.getElementById('password1')
    let password2 = document.getElementById('password2')

    if (password1.value != password2.value) {
        password1.setCustomValidity("Los passwords no coinciden")
        password1.classList.add('error')
        password2.classList.add('error')
    } else {
        password1.setCustomValidity("")
        ejecutarForm()
    }
}

let btn = document.querySelector('#btnAceptar')

btn.onclick = validacion

function iniciar(){
    document.formEjercicio.addEventListener("invalid", validacion, true); //TRUE envía un elemento en específico
}

function validacion(e){
e.style.backgroundColor = red;
}

window.addEventListener("load", iniciar(), false) //FALSE No envía un elemento en específico