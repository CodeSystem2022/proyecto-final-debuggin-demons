const usuario = JSON.parse(localStorage.getItem("user"));
const navOptions = document.querySelector("#items_navbar");

if (!usuario) {

  const registrationLink = document.createElement("a");
  registrationLink.classList.add("nav-link");
  registrationLink.href = "src/components/registro.html";
  registrationLink.textContent = "Registro";

  const loginLink = document.createElement("a");
  loginLink.classList.add("nav-link");
  loginLink.href =
    "http://127.0.0.1:5500/frontend/src/components/login.html";
  loginLink.textContent = "Login";

  const registrationNavItem = document.createElement("li");
  registrationNavItem.classList.add("nav-item");
  registrationNavItem.appendChild(registrationLink);

  const loginNavItem = document.createElement("li");
  loginNavItem.classList.add("nav-item");
  loginNavItem.appendChild(loginLink);

  navOptions.appendChild(registrationNavItem);
  navOptions.appendChild(loginNavItem);
    
} else {

  const navItem = document.createElement("li");
  navItem.classList.add("nav-item");
  navItem.classList.add("d-flex");

  const carritoNavLink = document.createElement("a");
  carritoNavLink.classList.add("nav-link");
  carritoNavLink.href = "src/components/carrito.html";
  carritoNavLink.textContent = "Carrito";

  const comprasNavLink = document.createElement("a");
  comprasNavLink.classList.add("nav-link");
  comprasNavLink.href = "src/components/compras.html";
  comprasNavLink.textContent = "Compras";
  
  navItem.appendChild(carritoNavLink);
  navItem.appendChild(comprasNavLink);

  navOptions.appendChild(navItem)

}
    const acercDeLink = document.createElement("a");
    acercDeLink.classList.add("nav-link");
    acercDeLink.href =
      "http://127.0.0.1:5500/frontend/src/components/acercaDe.html";
    acercDeLink.textContent = "Acerca De";

    const contactoLink = document.createElement("a");
    contactoLink.classList.add("nav-link");
    contactoLink.href =
      "http://127.0.0.1:5500/frontend/src/components/contacto.html";
    contactoLink.textContent = "Contacto";

    const acercaDeNavItem = document.createElement("li");
    acercaDeNavItem.classList.add("nav-item");
    acercaDeNavItem.appendChild(acercDeLink);

    const contactoNavItem = document.createElement("li");
    contactoNavItem.classList.add("nav-item");
    contactoNavItem.appendChild(contactoLink);

    navOptions.appendChild(acercaDeNavItem);
    navOptions.appendChild(contactoNavItem);


const salir = (e) => {
  e.preventDefault();
  localStorage?.removeItem("user")
  localStorage?.removeItem("carrito")
  localStorage?.removeItem("metodos")
  localStorage?.removeItem("compras")
  localStorage?.removeItem("videojuegoAmostrar");
  localStorage?.removeItem("videojuegos");
  window.location.href = "http://localhost:5500/frontend/index.html";
}


const btn_salir = document.querySelector("#sing-out");
btn_salir.addEventListener('click', salir);
