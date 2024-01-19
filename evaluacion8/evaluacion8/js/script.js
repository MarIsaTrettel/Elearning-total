
function cambiaColor() {

    var color = 'rgb(' + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ')';

    $(document.body).css({ backgroundColor: color }, 1000);

    window.setTimeout("cambiaColor()", 1100);
}

$(document).ready(function () {

    cambiaColor();
});


