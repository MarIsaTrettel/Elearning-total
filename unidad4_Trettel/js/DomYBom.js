let colorChange = document.getElementsByTagName('body');
let pragColorChange = document.getElementsByTagName('p');
let pragFontSize = document.getElementById('destacado');
let titleSize = document.getElementsByTagName('h2');


colorChange[0].style.backgroundColor='#fcf79f';

for (let i=0; i<pragColorChange.length; i++) {
    pragColorChange[i].style.backgroundColor= '#0ca001'
}

pragFontSize.style.fontSize = '24px';

for (let i=0; i<titleSize.length; i++) {
    titleSize[i].style.fontFamily= 'arial'
}

let vinculo = document.createElement('a');
let contenido = document.createTextNode('https://www.lipsum.com');
vinculo.appendChild(contenido);
document.body.appendChild(vinculo)