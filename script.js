const boton = document.getElementById("entrar");
const inicio = document.querySelector(".inicio");
const carta = document.querySelector(".carta");

boton.addEventListener("click", () => {
    inicio.style.display = "none";
    carta.style.display = "block";
});
