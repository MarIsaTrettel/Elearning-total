var ingrediente1 = prompt("Ingrese el primer ingrediente para la ensalada: ")
var ingrediente2 = prompt("Ingrese el segundo ingrediente para la ensalada: ")
var ingrediente3 = prompt("Ingrese el tercer ingrediente para la ensalada: ")


document.write(
    "<section class=\"contenedorIngredientes\">"+
    "<h2>Ingredientes de la ensalada:</h2>" +
    "<ul>" + 
        "<li>" + ingrediente1 + "</li>" + 
        "<li>" + ingrediente2 + "</li>" + 
        "<li>" + ingrediente3 + "</li>" +
    "</ul>"+ 
    "</section>"
)