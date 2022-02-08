var desfase, estilo, grosor, margen, color;

function agregarOutLine() {
    grosor = document.getElementById("grosor_out").value;
    var selectOut = document.getElementById("estilo_out");
    estilo = selectOut.options[selectOut.selectedIndex].value;
    desfase = document.getElementById("desfase_out").value;
    var rojo = document.getElementById("rojo_out").value;
    var verde = document.getElementById("verde_out").value;
    var azul = document.getElementById("azul_out").value;
    var selectTrans = document.getElementById("miselectOut");
    var transparenciaOut = selectTrans.options[selectTrans.selectedIndex].value;

    var rectangulOut = document.getElementById("milienzoOut");

    var desfaseI = parseInt(desfase);
    var grosorI = parseInt(grosor);
    margen = desfaseI + grosorI;

    color = "rgba(" + rojo + ", " + verde + ", " + azul + ", " + transparenciaOut + ")"

    rectangulOut.style.outlineColor = color;
    rectangulOut.style.outlineOffset = desfase + "px";
    rectangulOut.style.outlineStyle = estilo;
    rectangulOut.style.outlineWidth = grosor + "px";
    rectangulOut.style.marginBottom = margen + "px";
    rectangulOut.style.marginLeft = margen + "px";
    rectangulOut.style.marginRight = margen + "px";
    rectangulOut.style.marginTop = margen + "px";

    var botones_rgba = document.getElementById("botonesRGBA");
    var campo_RGBA = document.getElementById("campoRGBA");
    var titulo_rgba = document.getElementById("tituloRGBA");
    var control_rgba = document.getElementById("controlRGBA");
    var velocidad = 750;

    if (botones_rgba.checked) {
        setTimeout("botoones()", velocidad);
        velocidad += 500;
    }

    if (campo_RGBA.checked) {
        setTimeout("titulocampo()", velocidad);
        velocidad += 500;
    }

    if (titulo_rgba.checked) {
        setTimeout("titulo()", velocidad);
        velocidad += 500;
    }

    if (control_rgba.checked) {
        setTimeout("contro()", velocidad);
        velocidad += 500;
    }

}

function botoones() {
    var boton = document.getElementById("btn_accionOut");

    boton.style.outlineColor = color;
    boton.style.outlineOffset = desfase + "px";
    boton.style.outlineStyle = estilo;
    boton.style.outlineWidth = grosor + "px";
    boton.style.marginBottom = margen + "px";
    boton.style.marginLeft = margen + "px";
    boton.style.marginRight = margen + "px";
    boton.style.marginTop = margen + "px";
}

function titulocampo () {
    var campo = document.getElementById("campoOut");

    campo.style.outlineColor = color;
    campo.style.outlineOffset = desfase + "px";
    campo.style.outlineStyle = estilo;
    campo.style.outlineWidth = grosor + "px";
    campo.style.marginBottom = margen + "px";
    campo.style.marginLeft = margen + "px";
    campo.style.marginRight = margen + "px";
    campo.style.marginTop = margen + "px";
}

function titulo () {
    var titulo = document.getElementById("tit");
    titulo.style.outlineColor = color;
    titulo.style.outlineOffset = desfase + "px";
    titulo.style.outlineStyle = estilo;
    titulo.style.outlineWidth = grosor + "px";
    titulo.style.marginBottom = margen + "px";
    titulo.style.marginLeft = margen + "px";
    titulo.style.marginRight = margen + "px";
    titulo.style.marginTop = margen + "px";
}

function contro () {
    var control = document.getElementById("formularioOut");
    control.style.outlineColor = color;
    control.style.outlineOffset = desfase + "px";
    control.style.outlineStyle = estilo;
    control.style.outlineWidth = grosor + "px";
    control.style.marginBottom = margen + "px";
    control.style.marginLeft = margen + "px";
    control.style.marginRight = margen + "px";
    control.style.marginTop = margen + "px";
}

function validar () {
    var inputs = document.getElementsByName("numero");
    var desfase = document.getElementById("desfase_out");
    var grosor = document.getElementById("grosor_out");

    var botones_rgba = document.getElementById("botonesRGBA");
    var campo_RGBA = document.getElementById("campoRGBA");
    var titulo_rgba = document.getElementById("tituloRGBA");
    var control_rgba = document.getElementById("controlRGBA");

    var validacion = true;
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            validacion = false;
        }
    }

    if (desfase.value == "") {
        validacion = false;
    }

    if (grosor.value == "") {
        validacion = false;
    }

    var miboton = document.getElementById("btn_accionOut");
    miboton.disabled = !validacion;
    botones_rgba.disabled = !validacion;
    campo_RGBA.disabled = !validacion;
    titulo_rgba.disabled = !validacion;
    control_rgba.disabled = !validacion;

    var inputC = document.getElementById("color_prueba");
    var rojo = document.getElementById("rojo_out").value;
    var verde = document.getElementById("verde_out").value;
    var azul = document.getElementById("azul_out").value;
    var selectTrans = document.getElementById("miselectOut");
    var selectTrans = document.getElementById("miselectOut");
    var transparenciaOut = selectTrans.options[selectTrans.selectedIndex].value;
    color = "rgba(" + rojo + ", " + verde + ", " + azul + ", " + transparenciaOut + ")"
    inputC.style.background = color;
    console.log(color);

}

