const elementMenu = document.getElementById("botonMenu");
const elementLista = document.getElementById("menuPrincipal");

elementMenu.addEventListener("click", () => {
    elementLista.classList.toggle("menuPrincipal-Responsive");
});