const portada = document.querySelector(".portada");
const carta = document.querySelector(".carta");
const musica = document.querySelector(".musica");
const contador = document.querySelector(".contador");
const final = document.querySelector(".final");
const btnEntrar = document.getElementById("entrar");
const btnContinuar = document.getElementById("continuar");
const btnContador = document.getElementById("contadorBtn");
const btnFinal = document.getElementById("finalBtn");
const tiempo = document.getElementById("tiempo");

// Ocultar secciones
carta.style.display = "none";
musica.style.display = "none";
contador.style.display = "none";

// Portada → Carta
btnEntrar.onclick = () => {
    portada.style.display = "none";
    carta.style.display = "block";
};

// Carta → Música
btnContinuar.onclick = () => {
    carta.style.display = "none";
    musica.style.display = "block";
};

// Música → Contador
btnContador.onclick = () => {
    musica.style.display = "none";
    contador.style.display = "block";
    actualizarTiempo();
};

function actualizarTiempo() {

    const inicio = new Date("2024-06-26");
    const hoy = new Date();

    const diferencia = hoy - inicio;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    tiempo.innerHTML =
        "❤️ Han pasado <br><br><strong>" +
        dias +
        " días</strong><br><br>y sigo eligiéndote cada día.";
}
btnFinal.onclick = () => {

    contador.style.display = "none";

    final.style.display = "block";

}
