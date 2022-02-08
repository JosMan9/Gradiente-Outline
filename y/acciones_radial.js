var fondo;
var fondoRadialHSLA;

function validarRGBAradial() {
    var inputs = document.getElementsByName("numeroR");
    var ptc_input = document.getElementById("txt_posRGBA");

    var fondo_rgba = document.getElementById("fondoRGBA");
    var botones_rgba = document.getElementById("botonesRGBA");
    var campo_RGBA = document.getElementById("campoRGBA");
    var control_rgba = document.getElementById("controlRGBA");

    console.log(inputs.length);

    var validacion = true;

    
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            validacion = false;
        }
    }

    if (ptc_input.value == "") {
        validacion = false;
    }

    var mibotonRadial = document.getElementById("btn_accionRadial");
    mibotonRadial.disabled = !validacion;
    fondo_rgba.disabled = !validacion;
    botones_rgba.disabled = !validacion;
    campo_RGBA.disabled = !validacion;
    control_rgba.disabled = !validacion;

    var inputsC = document.getElementsByName("color_prueba");
    var inputsC2 = document.getElementsByName("numeroR");
    var selects = document.getElementsByName("selectRadial");

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
        if (i % 4 == 0) {
            inputsRojo[rojo] = inputsC2[i].value;
            rojo++;
        }

        if (i % 4 == 1) {
            inputsVerde[verde] = inputsC2[i].value;
            verde++;
        }

        if (i % 4 == 2) {
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
    var inputs = document.getElementsByName("numeroR2");
    var deg_input = document.getElementById("txt_posHSLA");

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

    var mibotonRadial = document.getElementById("btn_accion2Radial");
    mibotonRadial.disabled = !validacion;
    fondo_hsla.disabled = !validacion;
    botones_hsla.disabled = !validacion;
    campo_hsla.disabled = !validacion;
    control_hsla.disabled = !validacion;

    var inputsC = document.getElementsByName("color_prueba2");
    var inputsC2 = document.getElementsByName("numeroR2");
    var selects = document.getElementsByName("numero_radialR2");

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
        if (i % 4 == 0) {
            inputsRojo[rojo] = inputsC2[i].value;
            rojo++;
        }

        if (i % 4 == 1) {
            inputsVerde[verde] = inputsC2[i].value;
            verde++;
        }

        if (i % 4 == 2) {
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

function agregarRGBA2() {
    var mibotonLineal = document.getElementById("btn_accionRadial");
    mibotonLineal.disabled = true;
    var padre = document.getElementById("campoR");
    var select = document.createElement("select");
    select.setAttribute("name", "selectRadial");
    select.setAttribute("style","margin-right: 4px");
    select.setAttribute("onchange", "validarRGBAradial()");

    var input_color = document.createElement("input");
    input_color.disabled = true;
    input_color.type = "number";
    input_color.min = "0";
    input_color.max = "100";
    input_color.name = "color_prueba";
    input_color.style.borderColor = "black";
    input_color.style.marginLeft = "53px";

    var arrayL = {};
    var arrayI = {};
    var espacio = document.createElement("p");
    padre.appendChild(espacio);

    for (var i = 0; i <= 10; i++) {
        var miOption = document.createElement("option");
        miOption.setAttribute("label", (i / 10));
        miOption.setAttribute("value", (i / 10));
        select.appendChild(miOption);
    }

    for (var i = 0; i < 5; i++) {
        if (i < 5) {
            arrayL[i] = document.createElement("label");
            arrayI[i] = document.createElement("input");
            arrayI[i].type = "number";
            arrayI[i].setAttribute("name", "numeroR")
            arrayI[i].min = "0";
            arrayI[i].setAttribute("onkeyup", "validarRGBAradial()");
            arrayI[i].setAttribute("style", "margin-right: 4px");
        } else {
            arrayL[i].document.createElement("label");
        }

        switch (i) {
            case 0:
                arrayL[i].setAttribute("label", "R: ");
                arrayL[i].innerHTML = "R: ";
                arrayI[i].max = "255";
                break;
            case 1:
                arrayL[i].setAttribute("label", " G: ");
                arrayL[i].innerHTML = "G: ";
                arrayI[i].max = "255";
                break;
            case 2:
                arrayL[i].setAttribute("label", "B: ");
                arrayL[i].innerHTML = "B: ";
                arrayI[i].max = "255";
                break;
            case 3:
                arrayL[i].setAttribute("label", "A: ");
                arrayL[i].innerHTML = "A: ";
                break;
            case 4:
                arrayL[i].setAttribute("label", "%: ");
                arrayL[i].innerHTML = "%: ";
                arrayI[i].max = "100";
                break;
        }

    }

    for (var i = 0; i < 5; i++) {
        if (i === 3) {
            padre.appendChild(arrayL[i]);
            padre.appendChild(select);
        } else {
            padre.appendChild(arrayL[i]);
            padre.appendChild(arrayI[i]);
        }
    }

    padre.appendChild(input_color);


}

function agregarHSLA2() {
    var mibotonRadial = document.getElementById("btn_accion2Radial");
    mibotonRadial.disabled = true;
    var padre = document.getElementById("campoR2");
    var select = document.createElement("select");
    select.setAttribute("name", "numero_radialR2");
    select.setAttribute("style","margin-right: 3px");
    select.setAttribute("onchange", "validarDatosLinealHSLA()");
    var input_color2 = document.createElement("input");
    input_color2.disabled = true;
    input_color2.type = "number";
    input_color2.min = "0";
    input_color2.max = "100";
    input_color2.name = "color_prueba2";
    input_color2.style.borderColor = "black";
    input_color2.style.marginLeft = "53px";


    var arrayL = {};
    var arrayI = {};
    var espacio = document.createElement("p");
    padre.appendChild(espacio);

    for (var i = 0; i <= 10; i++) {
        var miOption = document.createElement("option");
        miOption.setAttribute("label", (i / 10));
        miOption.setAttribute("value", (i / 10));
        select.appendChild(miOption);
    }

    for (var i = 0; i < 5; i++) {
        if (i < 5) {
            arrayL[i] = document.createElement("label");
            arrayI[i] = document.createElement("input");
            arrayI[i].type = "number";
            arrayI[i].setAttribute("name", "numeroR2")
            arrayI[i].min = "0";
            arrayI[i].setAttribute("onkeyup", "validarDatosLinealHSLA()");
            arrayI[i].setAttribute("style", "margin-right: 4px");
        } else {
            arrayL[i].document.createElement("label");
        }

        switch (i) {
            case 0:
                arrayL[i].setAttribute("label", "H: ");
                arrayL[i].innerHTML = "H: ";
                arrayI[i].max = "360";
                break;
            case 1:
                arrayL[i].setAttribute("label", " S: ");
                arrayL[i].innerHTML = "S: ";
                arrayI[i].max = "100";
                break;
            case 2:
                arrayL[i].setAttribute("label", "L: ");
                arrayL[i].innerHTML = "L: ";
                arrayI[i].max = "100";
                break;
            case 3:
                arrayL[i].setAttribute("label", "A: ");
                arrayL[i].innerHTML = "A: ";
                break;
            case 4:
                arrayL[i].setAttribute("label", "%: ");
                arrayL[i].innerHTML = "%: ";
                arrayI[i].max = "100";
                break;
        }
    }

    for (var i = 0; i < 5; i++) {
        if (i === 3) {
            padre.appendChild(arrayL[i]);
            padre.appendChild(select);
        } else {
            padre.appendChild(arrayL[i]);
            padre.appendChild(arrayI[i]);
        }
    }

    padre.appendChild(input_color2);

}

function agregarColorRadial() {
    colores_rojo = new Array();
    colores_verde = new Array();
    colores_azul = new Array();
    colores_porcentaje = new Array();
    var transparencias = new Array();

    var entradas = document.getElementsByName("numeroR");
    var selectsR = document.getElementsByName("selectRadial");
    var forma = document.getElementById("sele_rad").selectedIndex;
    var posicion = document.getElementById("txt_posRGBA").value;

    var rojo = 0;
    var verde = 0;
    var azul = 0;
    var porcentaje = 0;

    console.log(entradas.length);

    for (var i = 0; i < entradas.length; i++) {
        if (i < selectsR.length) {
            var indiceR = selectsR[i].selectedIndex;
            transparencias[i] = selectsR[i].options[indiceR].value;
        }

        switch (i % 4) {
            case 0:
                colores_rojo[rojo] = entradas[i].value;
                rojo++;
                break;
            case 1:
                colores_verde[verde] = entradas[i].value;
                verde++;
                break;
            case 2:
                colores_azul[azul] = entradas[i].value;
                azul++;
                break;
            case 3:
                colores_porcentaje[porcentaje] = entradas[i].value;
                porcentaje++;
                break;
        }
    }

    var rgbasR = new Array();
    if (forma == 0) {
        forma = "circle";
    } else {
        forma = "ellipse";
    }
    fondo = "background: -webkit-radial-gradient(" + posicion + "%, " + forma + ", ";

    for (var i = 0; i < colores_rojo.length; i++) {
        rgbasR[i] = "rgba(" + colores_rojo[i] + ", " + colores_verde[i] + ", " + colores_azul[i] + ", " + transparencias[i] + ")";
        fondo = fondo + rgbasR[i] + " " + colores_porcentaje[i] + "%";
        if (i === (colores_rojo.length - 1)) {
            fondo = fondo + ");"
        } else {
            fondo = fondo + ", ";
        }
    }
    //console.log(fondo);

    var rectanguloR = document.getElementById("milienzoR");
    rectanguloR.setAttribute("style", fondo);

    var fondo_rgba = document.getElementById("fondoRGBA");
    var botones_rgba = document.getElementById("botonesRGBA");
    var campo_RGBA = document.getElementById("campoRGBA");
    var control_rgba = document.getElementById("controlRGBA");
    var velocidad = 750;

    if (fondo_rgba.checked) {
        setTimeout("fondoRGBA(fondo)", velocidad);
        velocidad += 500;
    }

    if (botones_rgba.checked) {
        setTimeout("botonesRGBA(fondo)", velocidad);
        velocidad += 500;
    }

    if (campo_RGBA.checked) {
        setTimeout("campoRGBA(fondo)", velocidad);
        velocidad += 500;
    }

    if (control_rgba.checked) {
        setTimeout("controlRGBA(fondo)", velocidad);
        velocidad += 500;
    }
}


function agregarHSLARadial() {
    colores_rojo = new Array();
    colores_verde = new Array();
    colores_azul = new Array();
    colores_porcentaje = new Array();
    var transparencias = new Array();

    var entradas = document.getElementsByName("numeroR2");
    var selectsR = document.getElementsByName("numero_radialR2");
    var forma = document.getElementById("selec_radial2").selectedIndex;
    var posicion = document.getElementById("txt_posHSLA").value;

    var rojo = 0;
    var verde = 0;
    var azul = 0;
    var porcentaje = 0;

    console.log(entradas.length);

    for (var i = 0; i < entradas.length; i++) {
        if (i < selectsR.length) {
            var indiceR = selectsR[i].selectedIndex;
            transparencias[i] = selectsR[i].options[indiceR].value;
        }

        switch (i % 4) {
            case 0:
                colores_rojo[rojo] = entradas[i].value;
                rojo++;
                break;
            case 1:
                colores_verde[verde] = entradas[i].value;
                verde++;
                break;
            case 2:
                colores_azul[azul] = entradas[i].value;
                azul++;
                break;
            case 3:
                colores_porcentaje[porcentaje] = entradas[i].value;
                porcentaje++;
                break;
        }
    }

    var rgbasR = new Array();
    if (forma == 0) {
        forma = "circle";
    } else {
        forma = "ellipse";
    }
    fondoRadialHSLA = "background: -webkit-radial-gradient(" + posicion + "%, " + forma + ", ";

    for (var i = 0; i < colores_rojo.length; i++) {
        rgbasR[i] = "hsla(" + colores_rojo[i] + ", " + colores_verde[i] + "%, " + colores_azul[i] + "%, " + transparencias[i] + ")";
        fondoRadialHSLA = fondoRadialHSLA + rgbasR[i] + " " + colores_porcentaje[i] + "%";
        if (i === (colores_rojo.length - 1)) {
            fondoRadialHSLA = fondoRadialHSLA + ");"
        } else {
            fondoRadialHSLA = fondoRadialHSLA + ", ";
        }
    }
    //console.log(fondo);

    var rectanguloR = document.getElementById("milienzoR2");
    rectanguloR.setAttribute("style", fondoRadialHSLA);

    var fondo_hsla = document.getElementById("fondoHSLA");
    var botones_hsla = document.getElementById("botonesHSLA");
    var campo_hsla = document.getElementById("campoHSLA");
    var control_hsla = document.getElementById("controlHSLA");
    var velocidad = 750;

    if (fondo_hsla.checked) {
        setTimeout("fondoRGBA(fondoRadialHSLA)", velocidad);
        velocidad += 500;
    }

    if (botones_hsla.checked) {
        setTimeout("botonesHSLA(fondoRadialHSLA)", velocidad);
        velocidad += 500;
    }

    if (campo_hsla.checked) {
        setTimeout("campoHSLA(fondoRadialHSLA)", velocidad);
        velocidad += 500;
    }

    if (control_hsla.checked) {
        setTimeout("controlRGBA(fondoRadialHSLA)", velocidad);
        velocidad += 500;
    }
}

function agregarAmbosRadial() {
    var mibotonLineal = document.getElementById("btn_accionRadial");
    mibotonLineal.disabled = true;
    var padre = document.getElementById("campoR");
    var select = document.createElement("select");
    select.setAttribute("name", "selectRadial");
    select.setAttribute("style","margin-right: 1px");
    select.setAttribute("onchange", "validarRGBAradial()");

    var input_color = document.createElement("input");
    input_color.disabled = true;
    input_color.type = "number";
    input_color.min = "0";
    input_color.max = "100";
    input_color.style.marginLeft = "5px";
    input_color.name = "color_prueba";
    input_color.style.borderColor = "black";
    input_color.style.marginLeft = "55px";

    var arrayL = {};
    var arrayI = {};
    var espacio = document.createElement("p");
    padre.appendChild(espacio);

    for (var i = 0; i <= 10; i++) {
        var miOption = document.createElement("option");
        miOption.setAttribute("label", (i / 10));
        miOption.setAttribute("value", (i / 10));
        select.appendChild(miOption);
    }

    for (var i = 0; i < 5; i++) {
        if (i < 5) {
            arrayL[i] = document.createElement("label");
            arrayI[i] = document.createElement("input");
            arrayI[i].type = "number";
            arrayI[i].setAttribute("name", "numeroR")
            arrayI[i].min = "0";
            arrayI[i].setAttribute("onkeyup", "validarRGBAradial()");
            arrayI[i].setAttribute("style", "margin-right: 4px");
        } else {
            arrayL[i].document.createElement("label");
        }

        switch (i) {
            case 0:
                arrayL[i].setAttribute("label", "R: ");
                arrayL[i].innerHTML = "R: ";
                arrayI[i].max = "255";
                break;
            case 1:
                arrayL[i].setAttribute("label", " G: ");
                arrayL[i].innerHTML = "G: ";
                arrayI[i].max = "255";
                break;
            case 2:
                arrayL[i].setAttribute("label", "B: ");
                arrayL[i].innerHTML = "B: ";
                arrayI[i].max = "255";
                break;
            case 3:
                arrayL[i].setAttribute("label", "A: ");
                arrayL[i].innerHTML = "A: ";
                break;
            case 4:
                arrayL[i].setAttribute("label", "%: ");
                arrayL[i].innerHTML = "%: ";
                arrayI[i].max = "100";
                break;
        }

    }

    for (var i = 0; i < 5; i++) {
        if (i === 3) {
            padre.appendChild(arrayL[i]);
            padre.appendChild(select);
        } else {
            padre.appendChild(arrayL[i]);
            padre.appendChild(arrayI[i]);
        }
    }

    padre.appendChild(input_color);


    //parte hsla


    var mibotonRadial = document.getElementById("btn_accion2Radial");
    mibotonRadial.disabled = true;
    var padre = document.getElementById("campoR2");
    var select = document.createElement("select");
    select.setAttribute("name", "numero_radialR2");
    select.setAttribute("style","margin-right: 3px");
    select.setAttribute("onchange", "validarDatosLinealHSLA()");

    var input_color2 = document.createElement("input");
    input_color2.disabled = true;
    input_color2.type = "number";
    input_color2.min = "0";
    input_color2.max = "100";
    input_color2.name = "color_prueba2";
    input_color2.style.borderColor = "black";
    input_color2.style.marginLeft = "53px";

    var arrayL = {};
    var arrayI = {};
    var espacio = document.createElement("p");
    padre.appendChild(espacio);

    for (var i = 0; i <= 10; i++) {
        var miOption = document.createElement("option");
        miOption.setAttribute("label", (i / 10));
        miOption.setAttribute("value", (i / 10));
        select.appendChild(miOption);
    }

    for (var i = 0; i < 5; i++) {
        if (i < 5) {
            arrayL[i] = document.createElement("label");
            arrayI[i] = document.createElement("input");
            arrayI[i].type = "number";
            arrayI[i].setAttribute("name", "numeroR2")
            arrayI[i].min = "0";
            arrayI[i].setAttribute("onkeyup", "validarDatosLinealHSLA()");
            arrayI[i].setAttribute("style", "margin-right: 4px");
        } else {
            arrayL[i].document.createElement("label");
        }

        switch (i) {
            case 0:
                arrayL[i].setAttribute("label", "H: ");
                arrayL[i].innerHTML = "H: ";
                arrayI[i].max = "360";
                break;
            case 1:
                arrayL[i].setAttribute("label", " S: ");
                arrayL[i].innerHTML = "S: ";
                arrayI[i].max = "100";
                break;
            case 2:
                arrayL[i].setAttribute("label", "L: ");
                arrayL[i].innerHTML = "L: ";
                arrayI[i].max = "100";
                break;
            case 3:
                arrayL[i].setAttribute("label", "A: ");
                arrayL[i].innerHTML = "A: ";
                break;
            case 4:
                arrayL[i].setAttribute("label", "%: ");
                arrayL[i].innerHTML = "%: ";
                arrayI[i].max = "100";
                break;
        }
    }

    for (var i = 0; i < 5; i++) {
        if (i === 3) {
            padre.appendChild(arrayL[i]);
            padre.appendChild(select);
        } else {
            padre.appendChild(arrayL[i]);
            padre.appendChild(arrayI[i]);
        }
    }
    padre.appendChild(input_color2);

}

function fondoRGBA(e) {
    var cuerpo = document.getElementById("cuerpo");
    cuerpo.setAttribute("style", e);
}

function botonesRGBA(e) {
    var botonAgregar = document.getElementById("btn_agregarRadial");
    var botonColor = document.getElementById("btn_accionRadial");
    botonAgregar.setAttribute("style", e);
    botonColor.setAttribute("style", e);
}

function campoRGBA(e) {
    var c = document.getElementById("campoR");
    c.setAttribute("style", e);
}

function controlRGBA(e) {
    var f = document.getElementById("formularioLineal");
    f.setAttribute("style", e);
}

function botonesHSLA(e) {
    var botonAgregar = document.getElementById("btn_accion2Radial");
    var botonColor = document.getElementById("btn_agregar2Radial");
    botonAgregar.setAttribute("style", e);
    botonColor.setAttribute("style", e);
}

function campoHSLA(e) {
    var c = document.getElementById("campoR2");
    c.setAttribute("style", e);
}