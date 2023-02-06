function aplicarEstilosIncorrectos(message, messageId, inputElement) {
  document.getElementById(messageId).innerHTML = message;
  document.getElementById(messageId).style.color = "#e35958";
  inputElement.classList.remove("correcto");
  inputElement.classList.add("incorrecto");
}

function aplicarEstilosCorrectos(inputElement, messageId) {
  inputElement.classList.add("correcto");
  inputElement.classList.remove("incorrecto");
  document.getElementById(messageId).innerHTML = " ";
}

function validarCampoTexto() {
  var letrasPermitidas =
    "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ áéíóúàèìòùÁÉÍÓÚÀÈÌÒÙ";
  var nombreif = document.getElementById("nombre");
  var info = nombreif.value;

  if (info.length === 0) {
    aplicarEstilosIncorrectos("Rellene este campo", "mensajeNombre", nombreif);
    return false;
  }

  for (var i = 0; i < info.length; i++) {
    var letra = info.charAt(i);
    if (letrasPermitidas.indexOf(letra, 0) == -1) {
      aplicarEstilosIncorrectos(
        "Caracteres no permitidos",
        "mensajeNombre",
        nombreif
      );
      return false;
    }
  }

  aplicarEstilosCorrectos(nombreif, "mensajeNombre");
  return true;
}

function validarEmail() {
  var correoif = document.getElementById("email");
  var correo = correoif.value;

  if (correo.length === 0) {
    aplicarEstilosIncorrectos("Rellene este campo", "mensajeEmail", correoif);
    return false;
  }
  if (!/[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/.test(correo)) {
    aplicarEstilosIncorrectos("Email inválido", "mensajeEmail", correoif);
    return false;
  }

  aplicarEstilosCorrectos(correoif, "mensajeEmail");
  return true;
}

function validarPassword() {
  var passwordif = document.getElementById("password");
  var info = passwordif.value;

  if (info.length === 0) {
    aplicarEstilosIncorrectos(
      "Rellene este campo",
      "mensajePassword",
      passwordif
    );
    return false;
  }
  if (info.length > 8) {
    aplicarEstilosIncorrectos(
      "No debe tener más de 8 caracteres",
      "mensajePassword",
      passwordif
    );
    return false;
  }

  aplicarEstilosCorrectos(passwordif, "mensajePassword");
  return true;
}

function verificarPasswords() {
  var passwordsif = document.getElementById("password2");
  var password1 = document.getElementById("password");
  var info = passwordsif.value;

  if (info.length === 0) {
    aplicarEstilosIncorrectos(
      "Rellene este campo",
      "mensajePassword2",
      passwordsif
    );
    return false;
  }
  if (password1.value != info) {
    aplicarEstilosIncorrectos(
      "Las contraseñas no coinciden",
      "mensajePassword2",
      passwordsif
    );
    return false;
  } else {
    aplicarEstilosCorrectos(passwordsif, "mensajePassword2");
    return true;
  }
}

function validarFormulario() {
  if (
    validarCampoTexto() &&
    validarEmail() &&
    validarPassword() &&
    verificarPasswords()
  ) {
    alert("La inscripción ha sido correcta");
  } else {
    return false;
  }
}
