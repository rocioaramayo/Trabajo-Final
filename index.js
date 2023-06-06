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
  
    usernameInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
  });
  
  