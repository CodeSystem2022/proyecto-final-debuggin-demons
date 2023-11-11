let formulario = document.querySelector("#formulario-registro");
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  registrar();
});


const registrar = () => {

     const nombre = formulario.elements["nombre"].value;
     const apellido = formulario.elements["apellido"].value;
     const tel = formulario.elements["tel"].value;
     const email = formulario.elements["email"].value;
     const password = formulario.elements["password"].value;

}
