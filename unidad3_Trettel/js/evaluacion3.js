var numeros = [1, 5, 158, 6988, 2, 325];
var suma = numeros[0] + numeros[1];
var resta = numeros[3] - numeros[2];
var division = numeros[2] / numeros[3];
var multiplicacion = numeros[4] * numeros[5];

document.write(
    "<section class=\"contenedorNumeros\">" +
        "<h2>Operaciones</h2>" +
        "Array: [" + numeros + "]" +
        "<ul>" +
            "<li>Suma: " + numeros[0] + " + " + numeros[1] + " = " + suma + "</li>" +
            "<li>Resta: " + numeros[3] + " - " + numeros[2] + " = " + resta + "</li>" +
            "<li>División: " + numeros[2] + " / " + numeros[3] + " = " + division + "</li>" +
            "<li>Multiplicación: " + numeros[4] + " X " + numeros[5] + " = " + multiplicacion + "</li>" +
        "</ul>" +
    "</section>"
)

var series = ["Friends", "Lost", "Game of thrones", "This is us", "Revenge"]

series = series.sort()
document.write("<h2>Series</h2>")

for (var i = 0; i < series.length; i++) {
    document.write("<h3> - " + series[i] + "</h3>")
}