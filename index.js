$(document).ready(function () {

    var params = new URLSearchParams(window.location.search);
    var solo_parametro = params.get('solo');
    //obtengo parametros con params get
    var departamento_parametro =params.get("departamento")

    if (solo_parametro != undefined && solo_parametro != null){
        // $("#soloVivienda").val(solo_parametro)


        $("#vivienda_pendiente").hide()
        $('#vivienda_completada').removeAttr('hidden');
    }


    var solo_parametro_completada = params.get('solocompletada');
    if ( solo_parametro_completada!= undefined && solo_parametro_completada != null){
        $("#soloVivienda").val(solo_parametro_completada)

    }
   
    var departamento_parametro_completada = params.get('departamento_completado');
    if ( departamento_parametro_completada!= undefined && departamento_parametro_completada != null){
        $("#departamentoCasa").val(departamento_parametro_completada)
    }



    



    $("#target").on("submit", function (evento) {
        evento.preventDefault();
        var empleado =  $('#gridRadioEmpleado').is(':checked')
        if (empleado) {
            window.location.href = "empleado.html"
        }
        else {
            window.location.href = "coordinador.html"
        }
    })
    //Pagina empleado

    $("#ver_completada_educacion").on("click", function () {
       window.location.href = "educacion_form.html"
    })

    $("#ver_completada_politica").on("click", function () {
        window.location.href = "politica_form.html"
    })

    //Pagina coordinador
    $("#ver_completado_salu_Jose").on("click", function () {
        window.location.href = "salud_form2.html"
    })
     
    $("#ver_completada_segu_mati").on("click", function () {
        window.location.href = "seguridad2_form.html"
    })

    $("#ver_completada_vi_tomi").on("click", function () {
        window.location.href = "vivienda2_form.html"
    })

    //pendientes
    $("#form_vivienda").on("submit", function (evento) {
        evento.preventDefault();

        encuesta_vivienda={
            solo:"Vivo",
            departamento:"Vivo en departamento",
            cercania:"Vivo cerca del subte",
            garage:"si tiene dos",
        }
  


        window.location.href= "empleado.html?solo="+$("#soloVivienda").val()+"&departamento="+$("#departamentoCasa").val()

    })

    $("#ver_completada_vivienda").on("click", function () {
        window.location.href = "vivienda_form.html?solocompletada="+solo_parametro +"&departamento_completado="+departamento_parametro
        //recibir.html?nombre=Miguel&edad=37
     })

     //agragar los parametros








})
