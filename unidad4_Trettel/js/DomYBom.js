let colorChange = document.getElementsByTagName('body');
let paragColorChange = document.getElementsByTagName('p');
let paragFontSize = document.getElementById('destacado');
let titleSize = document.getElementsByTagName('h2');

//Aplicar color de fondo #fcf79f al documento.
colorChange[0].style.backgroundColor='#fcf79f';

//Cambiar el color de todos los párrafos (etiqueta p) a verde (#0ca001).
for (let i=0; i<paragColorChange.length; i++) {
    paragColorChange[i].style.backgroundColor= '#0ca001'
}

//Aumentar el tamaño de la fuente a 24px, solo del elemento con id "destacado".
paragFontSize.style.fontSize = '24px';

//Cambiar la familia tipográfica por Arial a los títulos (etiqueta h2).
for (let i=0; i<titleSize.length; i++) {
    titleSize[i].style.fontFamily= 'arial'
}

//Crear un vínculo con la referencia "https://www.lipsum.com".
let vinculo = document.createElement('a');
let contenido = document.createTextNode('VINCULO');
vinculo.setAttribute("href", "https://www.lipsum.com");
vinculo.appendChild(contenido);
document.body.appendChild(vinculo);





