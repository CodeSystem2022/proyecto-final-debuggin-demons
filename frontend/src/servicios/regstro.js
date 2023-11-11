const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
  username: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{10,14}$/, // 7 a 14 numeros. // Valida numero de telefonos argentinos.
};

//Expresiones regulares
//Expresion regular para email
///^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

//Expresion para nombres y apellidos
//^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$

const campos = {
  nombre: false,
  apellido: false,
  username: false,
  tel: false,
  email: false,
  contraseña: false,
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre":
      validarCampo(expresiones.nombre, e.target, "nombre");
      break;

    case "apellido":
      validarCampo(expresiones.apellido, e.target, "apellido");
      break;

    case "username":
      validarCampo(expresiones.username, e.target, "username");
      break;

    case "tel":
      validarCampo(expresiones.telefono, e.target, "tel");
      break;

    case "email":
      validarCampo(expresiones.correo, e.target, "email");
      break;

    case "contraseña":
      validarCampo(expresiones.password, e.target, "contraseña");
      break;
  }
};

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document
      .getElementById(`grupo_${campo}`)
      .classList.remove("formulario_grupo-incorrecto");
    document
      .querySelector(`#grupo_${campo} .formulario_input_error`)
      .classList.remove("formulario_input_error-activo");
    campos[campo] = true;
  } else {
    document
      .getElementById(`grupo_${campo}`)
      .classList.add("formulario_grupo-incorrecto");
    document
      .querySelector(`#grupo_${campo} .formulario_input_error`)
      .classList.add("formulario_input_error-activo");
    campos[campo] = false;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  const body = {
    nombre: document.querySelector("input#nombre").value,
    apellido: document.querySelector("input#apellido").value,
    email: document.querySelector("input#email").value,
    username: document.querySelector("input#username").value,
    password: document.querySelector("input#password").value,
    age: 21,
    fechaNacimiento: "02/11/2002",
    carrito: [],
  };

  console.log(body);

  const { status } = await axios.post(
    "http://localhost:3000/auth/register",
    body
  );

  if (status === 201) {
    console.log("Usuario creado");
    window.location.href =
      "http://127.0.0.1:5500/frontend/src/components/login.html";
  }



  // if (
  //   campos.nombre &&
  //   campos.apellido &&
  //   campos.username &&
  //   campos.tel &&
  //   campos.email &&
  //   campos.contraseña
  // ) {
  //   formulario.reset();
  // }
});




