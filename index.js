$(document).ready(function () {

    var params = new URLSearchParams(window.location.search);
    //Parametros de Vivienda
    var solo_parametro = params.get('solo');
    var departamento_parametro =params.get("departamento")
    var tren_parametro =params.get("tren")
    var garage_parametro =params.get("garage")

    if (solo_parametro != undefined && solo_parametro != null){
        $("#vivienda_pendiente").hide()
        $('#vivienda_completada').removeAttr('hidden');
    }

    //Formulario de vivienda
    var solo_parametro_completada = params.get('solocompletada');
    if ( solo_parametro_completada!= undefined && solo_parametro_completada != null){
        $("#soloVivienda").val(solo_parametro_completada)
        $("#soloVivienda").prop('disabled', true);
    }
   
    var departamento_parametro_completada = params.get('departamento_completado');
    if ( departamento_parametro_completada!= undefined && departamento_parametro_completada != null){
        $("#departamentoCasa").val(departamento_parametro_completada)
        $("#departamentoCasa").prop('disabled', true);
    }

    var tren_parametro_completada = params.get('tren_completado');
    if ( tren_parametro_completada!= undefined && tren_parametro_completada!= null){
        $("#cercaniaEsta").val(tren_parametro_completada)
        $("#cercaniaEsta").prop('disabled', true);
    }

    var garage_parametro_completada = params.get('garage_completado');
    if ( garage_parametro_completada!= undefined && garage_parametro_completada!= null){
        $("#garageCasa").val(garage_parametro_completada)
        $("#garageCasa").prop('disabled', true);

    }

    //Parametros de salud

    var edad_parametro = params.get('edad');
    var peso_parametro =params.get("peso")
    var altura_parametro =params.get("altura")
    var ejercicio_parametro =params.get("ejercicio")

    if (edad_parametro != undefined && edad_parametro != null){
        $("#salud_pendiente").hide()
        $('#salud_completada').removeAttr('hidden');
    }
    //formu salud
    var edad_parametro_completada = params.get('edad_completada');
    if ( edad_parametro_completada!= undefined && edad_parametro_completada != null){
        $("#edadAño").val(edad_parametro_completada)
        $("#edadAño").prop('disabled', true);
    }
    var peso_parametro_completada = params.get('peso_completada');
    if ( peso_parametro_completada!= undefined && peso_parametro_completada != null){
        $("#pesoCorpo").val(peso_parametro_completada)
        $("#pesoCorpo").prop('disabled', true);
    }
    var altura_parametro_completada = params.get('altura_completada');
    if ( altura_parametro_completada != undefined && altura_parametro_completada != null){
        $("#estatura").val(altura_parametro_completada )
        $("#estatura").prop('disabled', true);
    }
    var ejercicio_parametro_completada = params.get('ejercicio_completada');
    if ( ejercicio_parametro_completada!= undefined && ejercicio_parametro_completada!= null){
        $("#ejercicioS").val(ejercicio_parametro_completada)
        $("#ejercicioS").prop('disabled', true);
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

    //pendientes 1
    $("#form_vivienda").on("submit", function (evento) {
        evento.preventDefault();
        window.location.href= "empleado.html?solo="+$("#soloVivienda").val()+"&departamento="+$("#departamentoCasa").val()+"&tren="+$("#cercaniaEsta").val()+"&garage="+$("#garageCasa").val()
    })
    $("#formulario_salud").on("submit", function (evento) {
        evento.preventDefault();
        window.location.href= "empleado.html?edad="+$("#edadAño").val()+"&peso="+$("#pesoCorpo").val()+"&altura="+$("#estatura").val()+"&ejercicio="+$("#ejercicioS").val()
    })

    $("#ver_completada_vivienda").on("click", function () {
        window.location.href = "vivienda_form.html?solocompletada="+solo_parametro +"&departamento_completado="+departamento_parametro+"&tren_completado="+tren_parametro+"&garage_completado="+garage_parametro
        //recibir.html?nombre=Miguel&edad=37
     })

     //salud formu
    $("#ver_completada_salud").on("click", function () {
        window.location.href = "salud_form.html?edad_completada="+edad_parametro +"&peso_completada="+peso_parametro+"&altura_completada="+altura_parametro+"&ejercicio_completada="+ejercicio_parametro

    })







})
