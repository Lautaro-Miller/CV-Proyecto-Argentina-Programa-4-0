const btnHabilidades = document.getElementById("btnHabilidades");
const habilidadesAdicionales = document.getElementById("habilidadesAdicionales");

btnHabilidades.addEventListener("click", function() {
    if (habilidadesAdicionales.style.display === "none") {
        habilidadesAdicionales.style.display = "block";
    } else {
        habilidadesAdicionales.style.display = "none";
    }
});