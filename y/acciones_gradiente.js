var fondo_gradiente;
var fondo_gradienteHSLA;


function cambiaColor() {
    var inputs = document.getElementsByName("numero");
    var selects = document.getElementsByName("numeroSelect");
    var deg_input = document.getElementById("txt_grado");
    var gradosIn = deg_input.value;
    var inputsRojo = new Array();
    var inputsVerde = new Array();
    var inputsAzul = new Array();
    var transparencias = new Array();

    console.log(inputs.length);


    var rojo = 0;
    var verde = 0;
    var azul = 0;

    for (var i = 0; i < inputs.length; i++) {
        if (i < selects.length) {
            var indice = selects[i].selectedIndex;
            transparencias[i] = selects[i].options[indice].value;
        }
        if (i % 3 == 0) {
            inputsRojo[rojo] = inputs[i].value;
            rojo++;
        }

        if (i % 3 == 1) {
            inputsVerde[verde] = inputs[i].value;
            verde++;
        }

        if (i % 3 == 2) {
            inputsAzul[azul] = inputs[i].value;
            azul++;
        }
    }


    var rgbas = new Array();
    console.log(inputsAzul.length);
    fondo_gradiente = "background: linear-gradient(" + gradosIn + "deg, ";

    for (var i = 0; i < inputsAzul.length; i++) {
        rgbas[i] = "rgba(" + inputsRojo[i] + ", " + inputsVerde[i] + ", " + inputsAzul[i] + ", " + transparencias[i] + ")";
    }

    for (var i = 0; i < inputsAzul.length; i++) {
        fondo_gradiente = fondo_gradiente + rgbas[i];
        if (i === (inputsAzul.length - 1)) {
            fondo_gradiente = fondo_gradiente + ");"
        } else {
            fondo_gradiente = fondo_gradiente + ", ";
        }
    }

    var rectangulo = document.getElementById("milienzo");
    rectangulo.setAttribute("style", fondo_gradiente);

    var fondo_rgba = document.getElementById("fondoRGBA");
    var botones_rgba = document.getElementById("botonesRGBA");
    var campo_RGBA = document.getElementById("campoRGBA");
    var control_rgba = document.getElementById("controlRGBA");
    var velocidad = 750;

    if (fondo_rgba.checked) {
        setTimeout("fondoRGBA(fondo_gradiente)", velocidad);
        velocidad += 500;
    }

    if (botones_rgba.checked) {
        setTimeout("botonesRGBA(fondo_gradiente)", velocidad);
        velocidad += 500;
    }

    if (campo_RGBA.checked) {
        setTimeout("campoRGBA(fondo_gradiente)", velocidad);
        velocidad += 500;
    }

    if (control_rgba.checked) {
        setTimeout("controlRGBA(fondo_gradiente)", velocidad);
        velocidad += 500;
    }
}


function fondoRGBA(e) {
    var cuerpo = document.getElementById("cuerpo");
    cuerpo.setAttribute("style", e);
}

function botonesRGBA(e) {
    var botonAgregar = document.getElementById("btn_agregar");
    var botonColor = document.getElementById("btn_accion");
    botonAgregar.setAttribute("style", e);
    botonColor.setAttribute("style", e);
}

function campoRGBA(e) {
    var c = document.getElementById("campo");
    c.setAttribute("style", e);
}

function controlRGBA(e) {
    var f = document.getElementById("formularioLineal");
    f.setAttribute("style", e);
}

function validarDatosLineal() {
    var inputs = document.getElementsByName("numero");
    var deg_input = document.getElementById("txt_grado");

    var fondo_rgba = document.getElementById("fondoRGBA");
    var botones_rgba = document.getElementById("botonesRGBA");
    var campo_RGBA = document.getElementById("campoRGBA");
    var control_rgba = document.getElementById("controlRGBA");

    var validacion = true;
    for (var i = 0; i < inputs.length; i++) {
    }

    if (deg_input.value == "") {
        validacion = false;
    }



    var mibotonLineal = document.getElementById("btn_accion");
    mibotonLineal.disabled = !validacion;
    fondo_rgba.disabled = !validacion;
    botones_rgba.disabled = !validacion;
    campo_RGBA.disabled = !validacion;
    control_rgba.disabled = !validacion;

    var inputsC = document.getElementsByName("color_prueba");
    var inputsC2 = document.getElementsByName("numero");
    var selects = document.getElementsByName("numeroSelect");

    var inputsRojo = new Array();
    var inputsVerde = new Array();
    var inputsAzul = new Array();
    var transparencias = new Array();

    var rojo = 0;
    var verde = 0;
    var azul = 0;

    for (var i = 0; i < inputs.length; i++) {
        if (i < selects.length) {
            var indice = selects[i].selectedIndex;
            transparencias[i] = selects[i].options[indice].value;
        }
        if (i % 3 == 0) {
            inputsRojo[rojo] = inputsC2[i].value;
            rojo++;
        }

        if (i % 3 == 1) {
            inputsVerde[verde] = inputsC2[i].value;
            verde++;
        }

        if (i % 3 == 2) {
            inputsAzul[azul] = inputsC2[i].value;
            azul++;
        }
    }

    var colores = new Array();
    console.log(inputsC.length);

    for (var i = 0; i < inputsAzul.length; i++) {
        colores[i] = "rgba(" + inputsRojo[i] + ", " + inputsVerde[i] + ", " + inputsAzul[i] + ", " + transparencias[i] + ")";
    }

    for (var i = 0; i < inputsC.length; i++) {
        inputsC[i].style.background = colores[i];
        console.log(colores[i]);
    }
}

function validarDatosLinealHSLA() {
    var inputs = document.getElementsByName("numero2");
    var deg_input = document.getElementById("grado_hsla");

    var fondo_hsla = document.getElementById("fondoHSLA");
    var botones_hsla = document.getElementById("botonesHSLA");
    var campo_hsla = document.getElementById("campoHSLA");
    var control_hsla = document.getElementById("controlHSLA");

    var validacion = true;
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            validacion = false;
        }
    }

    if (deg_input.value == "") {
        validacion = false;
    }

    var mibotonRadial = document.getElementById("btn_accion2");
    mibotonRadial.disabled = !validacion;
    fondo_hsla.disabled = !validacion;
    botones_hsla.disabled = !validacion;
    campo_hsla.disabled = !validacion;
    control_hsla.disabled = !validacion;

    var inputsC = document.getElementsByName("color_prueba2");
    var inputsC2 = document.getElementsByName("numero2");
    var selects = document.getElementsByName("numeroSelect2");

    var inputsRojo = new Array();
    var inputsVerde = new Array();
    var inputsAzul = new Array();
    var transparencias = new Array();

    console.log(selects.length);

    var rojo = 0;
    var verde = 0;
    var azul = 0;

    for (var i = 0; i < inputs.length; i++) {
        if (i < selects.length) {
            var indice = selects[i].selectedIndex;
            transparencias[i] = selects[i].options[indice].value;
        }
        if (i % 3 == 0) {
            inputsRojo[rojo] = inputsC2[i].value;
            rojo++;
        }

        if (i % 3 == 1) {
            inputsVerde[verde] = inputsC2[i].value;
            verde++;
        }

        if (i % 3 == 2) {
            inputsAzul[azul] = inputsC2[i].value;
            azul++;
        }
    }

    var colores = new Array();
    console.log(inputsC.length);

    for (var i = 0; i < inputsAzul.length; i++) {
        colores[i] = "hsla(" + inputsRojo[i] + ", " + inputsVerde[i] + "%, " + inputsAzul[i] + "%, " + transparencias[i] + ")";
    }

    for (var i = 0; i < inputsC.length; i++) {
        inputsC[i].style.background = colores[i];
        console.log(colores[i]);
    }
}

function agregarRGB() {
    var mibotonLineal = document.getElementById("btn_accion");
    mibotonLineal.disabled = true;
    var padre = document.getElementById("campo");
    var miSelect = document.createElement("select");
    miSelect.setAttribute("name", "numeroSelect");
    miSelect.setAttribute("onchange", "validarDatosLineal()");

    var input_color = document.createElement("input");
    input_color.disabled = true;
    input_color.type = "number";
    input_color.style.marginLeft = "5px";
    input_color.min = "0";
    input_color.max = "100";
    input_color.name = "color_prueba";
    input_color.style.borderColor = "black";
    input_color.style.marginLeft = "60px";

    var array_label = {};
    var array_input = {}
    var espacio = document.createElement("p");
    padre.appendChild(espacio);

    var numeros = new Array();

    for (var i = 0; i <= 10; i++) {
        numeros[i] = i / 10;
    }

    for (var i = 0; i <= 10; i++) {
        var miOption = document.createElement("option");
        miOption.setAttribute("label", numeros[i]);
        miOption.setAttribute("value", numeros[i])
        miSelect.appendChild(miOption);
    }

    for (var i = 0; i < 4; i++) {
        if (i < 4) {
            array_label[i] = document.createElement("label");
            array_input[i] = document.createElement("input");
            array_input[i].type = "number";
            array_input[i].setAttribute("name", "numero");
            array_input[i].min = "0";
            array_input[i].setAttribute("onkeyup", "validarDatosLineal()");
            array_input[i].setAttribute("style", "margin-right: 4px")
        } else {
            array_label[i] = document.createElement("label");

        }


        if (i === 0) {
            array_label[i].setAttribute("label", "R: ");
            array_label[i].innerHTML = "R: ";
            array_label[i].name = "numeroRojo";
            array_input[i].max = "255";

        }

        if (i === 1) {
            array_label[i].setAttribute("label", "G: ");
            array_label[i].innerHTML = "G: ";
            array_input[i].max = "255";

        }

        if (i === 2) {
            array_label[i].setAttribute("label", "B: ");
            array_label[i].innerHTML = "B: ";
            array_input[i].max = "255";

        }

        if (i === 3) {
            array_label[i].setAttribute("label", "A: ");
            array_label[i].innerHTML = "A: ";
        }
    }

    for (var i = 0; i < 4; i++) {
        if (i === 3) {
            padre.appendChild(array_label[i]);
            padre.appendChild(miSelect);
        } else {
            padre.appendChild(array_label[i]);
            padre.appendChild(array_input[i]);
        }

    }

    padre.appendChild(input_color);
}

function agregarHSLA() {
    var mibotonRadial = document.getElementById("btn_accion2");
    mibotonRadial.disabled = true;
    var padre = document.getElementById("campo2");
    var miSelect = document.createElement("select");
    miSelect.setAttribute("name", "numeroSelect2");
    miSelect.setAttribute("onchange", "validarDatosLinealHSLA()");

    var input_color2 = document.createElement("input");
    input_color2.disabled = true;
    input_color2.type = "number";
    input_color2.style.marginLeft = "5px";
    input_color2.min = "0";
    input_color2.max = "100";
    input_color2.name = "color_prueba2";
    input_color2.style.borderColor = "black";
    input_color2.style.marginLeft = "60px";

    var array_label = {};
    var array_input = {};
    var espacio = document.createElement("p");
    padre.appendChild(espacio);

    var numeros = new Array();

    for (var i = 0; i <= 10; i++) {
        numeros[i] = i / 10;
    }

    for (var i = 0; i <= 10; i++) {
        var miOption = document.createElement("option");
        miOption.setAttribute("label", numeros[i]);
        miOption.setAttribute("value", numeros[i])
        miSelect.appendChild(miOption);
    }

    for (var i = 0; i < 4; i++) {
        if (i < 4) {
            array_label[i] = document.createElement("label");
            array_input[i] = document.createElement("input");
            array_input[i].type = "number";
            array_input[i].setAttribute("name", "numero2");
            array_input[i].min = "0";
            array_input[i].setAttribute("onkeyup", "validarDatosLinealHSLA()");
            array_input[i].setAttribute("style", "margin-right: 4px")
        } else {
            array_label[i] = document.createElement("label");

        }


        if (i === 0) {
            array_label[i].setAttribute("label", "H: ");
            array_label[i].innerHTML = "H: ";
            array_label[i].name = "numeroRojo";
            array_input[i].max = "360";

        }

        if (i === 1) {
            array_label[i].setAttribute("label", "S: ");
            array_label[i].innerHTML = "S: ";
            array_input[i].max = "100";

        }

        if (i === 2) {
            array_label[i].setAttribute("label", "L: ");
            array_label[i].innerHTML = "L: ";
            array_input[i].max = "100";

        }

        if (i === 3) {
            array_label[i].setAttribute("label", "A: ");
            array_label[i].innerHTML = "A: ";
        }
    }

    for (var i = 0; i < 4; i++) {
        if (i === 3) {
            padre.appendChild(array_label[i]);
            padre.appendChild(miSelect);
        } else {
            padre.appendChild(array_label[i]);
            padre.appendChild(array_input[i]);
        }
    }

    var inputs = document.getElementsByName("numero2");

    var factor = inputs.length / 3;

    for (var i = 0; i < 3; i++) {
        array_input[i].className = "colorH" + factor
    }

    miSelect.className = "colorH" + factor + "select";
    padre.appendChild(input_color2);
}

function agregarAmbosLineal() {
    var mibotonLineal = document.getElementById("btn_accion");
    mibotonLineal.disabled = true;
    var padre = document.getElementById("campo");
    var miSelect = document.createElement("select");
    miSelect.setAttribute("name", "numeroSelect");
    //miSelect.onchange = "validarDatosLineal()";
    miSelect.setAttribute("onchange", "validarDatosLineal()");

    var input_color = document.createElement("input");
    input_color.disabled = true;
    input_color.type = "number";
    input_color.min = "0";
    input_color.max = "100";
    input_color.style.marginLeft = "5px";
    input_color.name = "color_prueba";
    input_color.style.borderColor = "black";
    input_color.style.marginLeft = "60px";

    var array_label = {};
    var array_input = {}
    var espacio = document.createElement("p");
    padre.appendChild(espacio);

    var numeros = new Array();

    for (var i = 0; i <= 10; i++) {
        numeros[i] = i / 10;
    }

    for (var i = 0; i <= 10; i++) {
        var miOption = document.createElement("option");
        miOption.setAttribute("label", numeros[i]);
        miOption.setAttribute("value", numeros[i])
        miSelect.appendChild(miOption);
    }

    for (var i = 0; i < 4; i++) {
        if (i < 4) {
            array_label[i] = document.createElement("label");
            array_input[i] = document.createElement("input");
            array_input[i].type = "number";
            array_input[i].setAttribute("name", "numero");
            array_input[i].min = "0";
            array_input[i].setAttribute("onkeyup", "validarDatosLineal()");
            array_input[i].setAttribute("style", "margin-right: 4px");
        } else {
            array_label[i] = document.createElement("label");

        }


        if (i === 0) {
            array_label[i].setAttribute("label", "R: ");
            array_label[i].innerHTML = "R: ";
            array_label[i].name = "numeroRojo";
            array_input[i].max = "255";

        }

        if (i === 1) {
            array_label[i].setAttribute("label", "G: ");
            array_label[i].innerHTML = "G: ";
            array_input[i].max = "255";

        }

        if (i === 2) {
            array_label[i].setAttribute("label", "B: ");
            array_label[i].innerHTML = "B: ";
            array_input[i].max = "255";

        }

        if (i === 3) {
            array_label[i].setAttribute("label", "A: ");
            array_label[i].innerHTML = "A: ";
        }
    }

    for (var i = 0; i < 4; i++) {
        if (i === 3) {
            padre.appendChild(array_label[i]);
            padre.appendChild(miSelect);
        } else {
            padre.appendChild(array_label[i]);
            padre.appendChild(array_input[i]);
        }
    }

    padre.appendChild(input_color);

    //La parte de HSLA

    var mibotonRadial = document.getElementById("btn_accion2");
    mibotonRadial.disabled = true;
    var padre = document.getElementById("campo2");
    var miSelect = document.createElement("select");

    miSelect.setAttribute("name", "numeroSelect2");
    miSelect.setAttribute("onchange", "validarDatosLinealHSLA()");

    var input_color2 = document.createElement("input");
    input_color2.disabled = true;
    input_color2.type = "number";
    input_color2.min = "0";
    input_color2.max = "100";
    input_color2.name = "color_prueba2";
    input_color2.style.borderColor = "black";
    input_color2.style.marginLeft = "60px";


    var array_label = {};
    var array_input = {};
    var espacio = document.createElement("p");
    padre.appendChild(espacio);

    var numeros = new Array();

    for (var i = 0; i <= 10; i++) {
        numeros[i] = i / 10;
    }

    for (var i = 0; i <= 10; i++) {
        var miOption = document.createElement("option");
        miOption.setAttribute("label", numeros[i]);
        miOption.setAttribute("value", numeros[i])
        miSelect.appendChild(miOption);
    }

    for (var i = 0; i < 4; i++) {
        if (i < 4) {
            array_label[i] = document.createElement("label");
            array_input[i] = document.createElement("input");
            array_input[i].type = "number";
            array_input[i].setAttribute("name", "numero2");
            array_input[i].min = "0";
            array_input[i].setAttribute("onkeyup", "validarDatosLinealHSLA()");
            array_input[i].setAttribute("style", "margin-right: 4px");
        } else {
            array_label[i] = document.createElement("label");

        }


        if (i === 0) {
            array_label[i].setAttribute("label", "H: ");
            array_label[i].innerHTML = "H: ";
            array_label[i].name = "numeroRojo";
            array_input[i].max = "360";

        }

        if (i === 1) {
            array_label[i].setAttribute("label", "S: ");
            array_label[i].innerHTML = "S: ";
            array_input[i].max = "100";

        }

        if (i === 2) {
            array_label[i].setAttribute("label", "L: ");
            array_label[i].innerHTML = "L: ";
            array_input[i].max = "100";

        }

        if (i === 3) {
            array_label[i].setAttribute("label", "A: ");
            array_label[i].innerHTML = "A: ";
        }
    }

    for (var i = 0; i < 4; i++) {
        if (i === 3) {
            padre.appendChild(array_label[i]);
            padre.appendChild(miSelect);
        } else {
            padre.appendChild(array_label[i]);
            padre.appendChild(array_input[i]);
        }
    }

    var inputs = document.getElementsByName("numero2");

    var factor = inputs.length / 3;

    for (var i = 0; i < 3; i++) {
        array_input[i].className = "colorH" + factor
    }

    miSelect.className = "colorH" + factor + "select";
    padre.appendChild(input_color2);


}

function cambiaHSLA() {
    var inputsRojo = new Array();
    var inputsVerde = new Array();
    var inputsAzul = new Array();
    var transparencias = new Array();

    var inputs = document.getElementsByName("numero2");
    var selects = document.getElementsByName("numeroSelect2");
    var deg_input = document.getElementById("grado_hsla");
    var gradosIn = deg_input.value;
    var rojo = 0;
    var verde = 0;
    var azul = 0;

    for (var i = 0; i < inputs.length; i++) {
        console.log(inputs[i].value);
        console.log(i);
        if (i < selects.length) {
            var indice = selects[i].selectedIndex;
            transparencias[i] = selects[i].options[indice].value;
        }

        if (i % 3 == 0) {
            inputsRojo[rojo] = inputs[i].value;
            rojo++;
        }

        if (i % 3 == 1) {
            inputsVerde[verde] = inputs[i].value;
            verde++;
        }

        if (i % 3 == 2) {
            inputsAzul[azul] = inputs[i].value;
            azul++;
        }
    }

    var rgbas = new Array();
    fondo_gradienteHSLA = "background: linear-gradient(" + gradosIn + "deg, ";

    for (var i = 0; i < inputsAzul.length; i++) {
        rgbas[i] = "hsla(" + inputsRojo[i] + ", " + inputsVerde[i] + "%, " + inputsAzul[i] + "%, " + transparencias[i] + ")";
    }

    for (var i = 0; i < inputsAzul.length; i++) {
        fondo_gradienteHSLA = fondo_gradienteHSLA + rgbas[i];
        if (i === (inputsAzul.length - 1)) {
            fondo_gradienteHSLA = fondo_gradienteHSLA + ");"
        } else {
            fondo_gradienteHSLA = fondo_gradienteHSLA + ", ";
        }
    }

    var rectangulo = document.getElementById("milienzo2");
    rectangulo.setAttribute("style", fondo_gradienteHSLA);

    var fondo_hsla = document.getElementById("fondoHSLA");
    var botones_hsla = document.getElementById("botonesHSLA");
    var campo_hsla = document.getElementById("campoHSLA");
    var control_hsla = document.getElementById("controlHSLA");
    var velocidad = 750;

    if (fondo_hsla.checked) {
        setTimeout("fondoRGBA(fondo_gradienteHSLA)", velocidad);
        velocidad += 500;
    }

    if (botones_hsla.checked) {
        setTimeout("botonesHSLA(fondo_gradienteHSLA)", velocidad);
        velocidad += 500;
    }

    if (campo_hsla.checked) {
        setTimeout("campoHSLA(fondo_gradienteHSLA)", velocidad);
        velocidad += 500;
    }

    if (control_hsla.checked) {
        setTimeout("controlRGBA(fondo_gradienteHSLA)", velocidad);
        velocidad += 500;
    }
}

function botonesHSLA(e) {
    var botonAgregar = document.getElementById("btn_agregar2");
    var botonColor = document.getElementById("btn_accion2");
    botonAgregar.setAttribute("style", e);
    botonColor.setAttribute("style", e);
}

function campoHSLA(e) {
    var c = document.getElementById("campo2");
    c.setAttribute("style", e);
}
