$(document).ready(function () {

    let encuesta_educacion={
        edad:"12",
        nivel:"primaria",
        escuela:"Santa lucia"
    }
    
    let encuesta_politica={
        edad:"16",
        partido:"peron",
        vota:"si",
    }

    
    $("#edad").text(encuesta_educacion.edad)
    $("#estudio").text(encuesta_educacion.nivel)
    $("#escuela").text(encuesta_educacion.escuela)

    $("#edad_politica").text(encuesta_politica.edad)
    $("#partido").text(encuesta_politica.partido)
    $("#votar").text(encuesta_politica.vota)

    $("#formulario_educacion").on("submit", function (evento) {
        evento.preventDefault();
        window.location.href = document.referrer;
    })

    $("#formulario_politica").on("submit", function (evento) {
        evento.preventDefault();
        window.location.href = document.referrer;
    })

})
