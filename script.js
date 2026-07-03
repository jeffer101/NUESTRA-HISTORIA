const boton = document.getElementById("entrar");
const portada = document.querySelector(".portada");
const carta = document.querySelector(".carta");
const musica = document.querySelector(".musica");

const continuar = document.getElementById("continuar");

boton.onclick = function () {
    portada.style.display = "none";
    carta.style.display = "block";
};

continuar.onclick = function () {
    carta.style.display = "none";
    musica.style.display = "block";
};
