$(document).ready(function () {
    
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
  
    usernameInput.addEventListener(validateForm);
    passwordInput.addEventListener(validateForm);
  });

  /*const button = document.getElementById('enviar');
  const form = document.getElementById('formulario');
  const sectionForm = document.getElementById('form_label');
  
  function validar() {
      if (form.label.value == 0) {
          alert("El campo es obligatorio");
          console.log("Funciona");
          form.form-label.focus();
          return false;
      }
  }
  
  button.onclick = validar;*/ //EROR, INTENTANDO VER QUE PASA JAJAJAJA
  
  