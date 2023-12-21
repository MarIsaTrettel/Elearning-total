var letras = ['T', 'R', 'W', 'I', 'U', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'A', 'O'];

var numeroUsuario = prompt("Ingrese un número");
var letraUsuario = prompt ("Ingrese una letra en mayúscula")

if (numeroUsuario > 25 || numeroUsuario < 0) {

    alert ("El número proporcionado no es válido")
   
}else{
    if (letras[numeroUsuario] != letraUsuario){
alert("La letra indicada es diferente a la asignada al numero seleccionado. Ha perdido")
    }else{
        alert("La letra indicada coincide con la asignada al numero seleccionado. Ha ganado")
    }
}