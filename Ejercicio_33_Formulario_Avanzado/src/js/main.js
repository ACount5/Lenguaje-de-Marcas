const inputs = document.querySelectorAll("#formulario input");

// Expresiones regulares
const expresiones = {
  usuario: /^[a-zA-Z0-9_]{4,16}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}$/,
  password: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
  telefono: /^[0-9]{9}$/
};

// Estado de validación
const campos = {
  usuario: false,
  email: false,
  password: false,
  telefono: false
};

// Función general
const validarCampo = (expresion, input, campo) => {
  const grupo = document.getElementById(`grupo-${campo}`);

  if (expresion.test(input.value)) {
    grupo.classList.remove("is-invalid");
    grupo.classList.add("is-valid");
    campos[campo] = true;
  } else {
    grupo.classList.add("is-invalid");
    grupo.classList.remove("is-valid");
    campos[campo] = false;
  }
};

// Validar contraseñas
const validarPassword2 = () => {
  const pass1 = document.getElementById("password");
  const pass2 = document.getElementById("password2");
  const grupo = document.getElementById("grupo-password2");

  if (pass1.value === pass2.value && pass1.value !== "") {
    grupo.classList.remove("is-invalid");
    grupo.classList.add("is-valid");
  } else {
    grupo.classList.add("is-invalid");
    grupo.classList.remove("is-valid");
  }
};

// Switch de validación
const validarFormulario = (e) => {
  switch (e.target.id) {
    case "usuario":
      validarCampo(expresiones.usuario, e.target, "usuario");
      break;
    case "email":
      validarCampo(expresiones.email, e.target, "email");
      break;
    case "password":
      validarCampo(expresiones.password, e.target, "password");
      validarPassword2();
      break;
    case "password2":
      validarPassword2();
      break;
    case "telefono":
      validarCampo(expresiones.telefono, e.target, "telefono");
      break;
  }
};

// Eventos
inputs.forEach(input => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

// Submit
document.getElementById("formulario").addEventListener("submit", (e) => {
  e.preventDefault();

  if (campos.usuario && campos.email && campos.password && campos.telefono) {
    alert("Formulario enviado correctamente ✅");
  } else {
    alert("Formulario incorrecto ❌");
  }
});