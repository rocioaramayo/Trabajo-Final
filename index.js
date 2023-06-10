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


/*document.addEventListener('DOMContentLoaded', function() {
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
});*/
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



const formulario = document.getElementById("formulario");
const labels = document.querySelectorAll("#label");

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    validarRespuesta();
});

console.log("Todo ok");

labels.forEach(function(label) {
    const input = label.querySelector("input, textarea, select");

    input.addEventListener("input", function(){
        validarRespuesta();
        console.log("Hola");
    });
    
    input.addEventListener("keypress", function(event){
        if(event.key === "Enter"){
            event.preventDefault();
            validarRespuesta();
        }
    });
});

console.log("Hola");

function validarRespuesta() {
    console.log("Entro en la función");
    let respuestasValidas = true;
      
    labels.forEach(function(label) {
        const input = label.querySelector("input, textarea, select");
        const respuesta = input.value;
      
        if (!respuestaValida(respuesta)) {
            respuestasValidas = false;
            // Puedes agregar aquí lógica adicional para tratar una respuesta no válida en un elemento específico si es necesario
            input.classList.add("respuesta-invalida");
        } else {
            // Puedes eliminar la clase "respuesta-invalida" en caso de que se haya agregado en validaciones anteriores
            input.classList.remove("respuesta-invalida");
        }
    });
    
    console.log("Todo ok");
    
    if (respuestasValidas) {
        console.log("El botón de enviar funciona correctamente.");
        formulario.submit();
    } else {
        alert("Una o más respuestas no son válidas. Por favor, reintente.");
    }
}
      
function respuestaValida(respuesta){
    if(respuesta.trim() !== ""){
        return true;
    } else {
        return false;
    }
}




/*inputs.forEach((input) => {
    input.addEventListener("keyup",validarFormulario);
    input.addEventListener("blur",validarFormulario);
});

formulario.addEventListener("submit",(e) =>{
    e.preventDefault();

})*/