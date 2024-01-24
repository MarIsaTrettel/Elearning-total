


var validacion = (id) => {
    var input0 = document.getElementById(id);
    if (!/^([a-zA-Z])+$/i.test(input0.value)) {
        input0.setCustomValidity("ingresar letras, no números")
        input0.style.color = "red";
    } else {
        input0.setCustomValidity("")
        input0.style.color = "white";
    }
}







