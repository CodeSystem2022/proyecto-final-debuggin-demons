// Crear el elemento nav
const nav = document.querySelector(".menu");
nav.classList.add("navbar", "navbar-dark", "bg-dark", "navbar-expand-lg");

// Crear el primer contenedor (div.container-fluid)
const container1 = document.createElement("div");
container1.classList.add("container-fluid");

// Crear el formulario
const form = document.createElement("form");
form.classList.add("d-flex", "input-group", "w-auto");

// Crear el input de búsqueda
const input = document.createElement("input");
input.setAttribute("type", "search");
input.classList.add("form-control", "rounded");
input.setAttribute("placeholder", "Search");
input.setAttribute("aria-label", "Search");
input.setAttribute("aria-describedby", "search-addon");

// Crear el span con el icono de búsqueda
const searchIcon = document.createElement("span");
searchIcon.classList.add("input-group-text", "text-white", "border-0");
searchIcon.setAttribute("id", "search-addon");

const searchIconContent = document.createElement("i");
searchIconContent.classList.add("fas", "fa-search");

// Agregar elementos al formulario
searchIcon.appendChild(searchIconContent);
form.appendChild(input);
form.appendChild(searchIcon);

// Agregar el formulario al primer contenedor
container1.appendChild(form);

// Crear el segundo contenedor (div.container-fluid)
const container2 = document.createElement("div");
container2.classList.add("container-fluid");

// Crear la lista de elementos de navegación
const ul = document.createElement("ul");
ul.classList.add("navbar-nav");

// Crear el elemento con la insignia
const badgeLi = document.createElement("li");
badgeLi.classList.add("nav-item");

const badgeLink = document.createElement("a");
badgeLink.classList.add("nav-link");
badgeLink.setAttribute("href", "#");

const badgeSpan = document.createElement("span");
badgeSpan.classList.add("badge", "badge-pill", "bg-danger");
badgeSpan.textContent = "1";

const badgeIcon = document.createElement("i");
badgeIcon.classList.add("fas", "fa-shopping-cart");

badgeLink.appendChild(badgeSpan);
badgeLink.appendChild(badgeIcon);

badgeLi.appendChild(badgeLink);

ul.appendChild(badgeLi);

// Agregar la lista de elementos de navegación al segundo contenedor
container2.appendChild(ul);

// Crear el tercer contenedor (div.container-fluid)
const container3 = document.createElement("div");
container3.classList.add("container-fluid");

// Crear la lista de elementos de navegación para el avatar
const avatarLi = document.createElement("li");
avatarLi.classList.add("nav-item", "dropdown");

const avatarLink = document.createElement("a");
avatarLink.classList.add(
  "nav-link",
  "dropdown-toggle",
  "d-flex",
  "align-items-center"
);
avatarLink.setAttribute("href", "#");
avatarLink.setAttribute("id", "navbarDropdownMenuLink");
avatarLink.setAttribute("role", "button");
avatarLink.setAttribute("data-mdb-toggle", "dropdown");
avatarLink.setAttribute("aria-expanded", "false");

const avatarImg = document.createElement("img");
avatarImg.setAttribute(
  "src",
  "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
);
avatarImg.classList.add("rounded-circle");
avatarImg.setAttribute("height", "22");
avatarImg.setAttribute("alt", "Portrait of a Woman");
avatarImg.setAttribute("loading", "lazy");

avatarLink.appendChild(avatarImg);

const dropdownMenu = document.createElement("ul");
dropdownMenu.classList.add("dropdown-menu");
dropdownMenu.setAttribute("aria-labelledby", "navbarDropdownMenuLink");

const profileLi = document.createElement("li");
const profileLink = document.createElement("a");
profileLink.classList.add("dropdown-item");
profileLink.setAttribute("href", "#");
profileLink.textContent = "My profile";

const settingsLi = document.createElement("li");
const settingsLink = document.createElement("a");
settingsLink.classList.add("dropdown-item");
settingsLink.setAttribute("href", "#");
settingsLink.textContent = "Settings";

const logoutLi = document.createElement("li");
const logoutLink = document.createElement("a");
logoutLink.classList.add("dropdown-item");
logoutLink.setAttribute("href", "#");
logoutLink.textContent = "Logout";

profileLi.appendChild(profileLink);
settingsLi.appendChild(settingsLink);
logoutLi.appendChild(logoutLink);

dropdownMenu.appendChild(profileLi);
dropdownMenu.appendChild(settingsLi);
dropdownMenu.appendChild(logoutLi);

avatarLi.appendChild(avatarLink);
avatarLi.appendChild(dropdownMenu);

ul.appendChild(avatarLi);

// Agregar los contenedores al elemento nav
nav.appendChild(container1);
nav.appendChild(container2);
nav.appendChild(container3);

