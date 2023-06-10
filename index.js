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
    
//Parametros de seguridad
    var descargar_parametro = params.get('descargar');
    var eliminar_parametro =params.get("eliminar")
    var terminologia_parametro =params.get("terminologia")
    var hackear_parametro =params.get("hackear")

    if (descargar_parametro!= undefined && descargar_parametro != null){
        $("#seguridad_pendiente").hide()
        $('#seguridad_completada').removeAttr('hidden');
    }

    var descargar_parametro_completada = params.get('descargar_completada');
    if ( descargar_parametro_completada!= undefined && descargar_parametro_completada != null){
        $("#descarga").val(descargar_parametro_completada)
        $("#descarga").prop('disabled', true);
    }

    var eliminar_parametro_completada = params.get('eliminar_completada');
    if ( eliminar_parametro_completada!= undefined && eliminar_parametro_completada != null){
        $("#eliminar").val(eliminar_parametro_completada)
        $("#eliminar").prop('disabled', true);
    }

    var terminologia_parametro_completada = params.get('terminologia_completada');
    if ( terminologia_parametro_completada!= undefined && terminologia_parametro_completada != null){
        $("#terminologia").val(terminologia_parametro_completada)
        $("#terminologia").prop('disabled', true);
    }

    var hackear_parametro_completada = params.get('hackear_completada');
    if ( hackear_parametro_completada!= undefined && hackear_parametro_completada != null){
        $("#hackear").val(hackear_parametro_completada)
        $("#hackear").prop('disabled', true);
    }

//Parametros de trabajo en equipo
    var rol_parametro = params.get('rol');
    var descripcion_parametro =params.get("descripcion")
    var compañeros_parametro =params.get("compañeros")
    var enojo_parametro =params.get("enojo")

    if (rol_parametro!= undefined && rol_parametro != null){
        $("#segundo_pendiente").hide()
        $('#segundo_completada').removeAttr('hidden');
    }

    var rol_parametro_completada = params.get('rol_completada');
    if ( rol_parametro_completada!= undefined &&  rol_parametro_completada!= null){
        $("#rol").val(rol_parametro_completada)
        $("#rol").prop('disabled', true);
    }

    var descripcion_parametro_completada = params.get('descripcion_completada');
    if ( descripcion_parametro_completada!= undefined &&  descripcion_parametro_completada!= null){
        $("#descripcion").val(descripcion_parametro_completada)
        $("#descripcion").prop('disabled', true);
    }

    var compañeros_parametro_completada = params.get('compañeros_completada');
    if ( compañeros_parametro_completada!= undefined &&  compañeros_parametro_completada!= null){
        $("#compañeros").val(compañeros_parametro_completada)
        $("#compañeros").prop('disabled', true);
    }

    var enojo_parametro_completada = params.get('enojo_completada');
    if ( enojo_parametro_completada!= undefined &&  enojo_parametro_completada!= null){
        $("#enojo").val(enojo_parametro_completada)
        $("#enojo").prop('disabled', true);
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

    $("#formulario_seguridad").on("submit", function (evento) {
        evento.preventDefault();
        window.location.href= "empleado.html?descargar="+$("#descarga").val()+"&eliminar="+$("#eliminar").val()+"&terminologia="+$("#terminologia").val()+"&hackear="+$("#hackear").val()
    })

    $("#formulario_seguridad").on("submit", function (evento) {
        evento.preventDefault();
        window.location.href= "empleado.html?descargar="+$("#descarga").val()+"&eliminar="+$("#eliminar").val()+"&terminologia="+$("#terminologia").val()+"&hackear="+$("#hackear").val()
    })
    $("#formulario_segundo").on("submit", function (evento) {
        evento.preventDefault();
        window.location.href= "empleado.html?rol="+$("#rol").val()+"&descripcion"+$("#descripcion").val()+"&compañeros="+$("#compañeros").val()+"&enojo="+$("#enojo").val()
    })


    //vivienda formu
    $("#ver_completada_vivienda").on("click", function () {
        window.location.href = "vivienda_form.html?solocompletada="+solo_parametro +"&departamento_completado="+departamento_parametro+"&tren_completado="+tren_parametro+"&garage_completado="+garage_parametro
        //recibir.html?nombre=Miguel&edad=37
     })

     //salud formu
    $("#ver_completada_salud").on("click", function () {
        window.location.href = "salud_form.html?edad_completada="+edad_parametro +"&peso_completada="+peso_parametro+"&altura_completada="+altura_parametro+"&ejercicio_completada="+ejercicio_parametro

    })
    //Seguridad formu
    $("#ver_completada_seguridad").on("click", function () {
        window.location.href = "seguridad_form.html?descargar_completada="+descargar_parametro +"&eliminar_completada="+eliminar_parametro+"&terminologia_completada="+terminologia_parametro+"&hackear_completada="+hackear_parametro
    })

    $("#ver_completada_segundo").on("click", function () {
        window.location.href = "segundo_form.html?rol_completada="+rol_parametro +"&descripcion_completada="+descripcion_parametro+"&compañeros_completada="+compañeros_parametro+"&enojo_completada="+enojo_parametro

    })



})
