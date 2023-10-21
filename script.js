const boton = document.getElementById("boton");
const navBar = document.getElementById("navBar");

boton.addEventListener("click", () => {
    navBar.classList.toggle("menuResponsive");
})
