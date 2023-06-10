$(document).ready(function () {
    //Funcion para log in
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












})





























document.addEventListener('DOMContentLoaded', function() {
    var usernameInput = document.getElementById('exampleInputEmail1');
    var passwordInput = document.getElementById('exampleInputPassword1');
    var loginButton = document.getElementById('ingresar');
    var usernameError = document.getElementById('usernameError');
    var passwordError = document.getElementById('passwordError');
  
    function validateForm() {
      var username = usernameInput.value;
      var password = passwordInput.value;
      var isUsernameValid = username.length >= 8;
      var isPasswordValid = password.length >= 8;
  
      usernameError.textContent = isUsernameValid ? '' : 'El nombre de usuario debe tener al menos 8 caracteres';
      passwordError.textContent = isPasswordValid ? '' : 'La contraseña debe tener al menos 8 caracteres';
  
      loginButton.disabled = !(isUsernameValid && isPasswordValid);
    }
  
    usernameInput.addEventListener("input",validateForm);
    passwordInput.addEventListener("input",validateForm);
});
 document.addEventListener('DOMContentLoaded', function() {
     var usernameInput = document.getElementById('exampleInputEmail1');
     var passwordInput = document.getElementById('exampleInputPassword1');
     var loginButton = document.getElementById('ingresar');
     var usernameError = document.getElementById('usernameError');
     var passwordError = document.getElementById('passwordError');

     if (usernameInput && passwordInput && loginButton && usernameError && passwordError) {
         function validateForm() {
             var username = usernameInput.value;
             var password = passwordInput.value;
             var isUsernameValid = username.length >= 8;
             var isPasswordValid = password.length >= 8;

             usernameError.textContent = isUsernameValid ? '' : 'El nombre de usuario debe tener al menos 8 caracteres';
             passwordError.textContent = isPasswordValid ? '' : 'La contraseña debe tener al menos 8 caracteres';

             loginButton.disabled = !(isUsernameValid && isPasswordValid);
         }

         usernameInput.addEventListener("input", validateForm);
         passwordInput.addEventListener("input", validateForm);
     }
 });



