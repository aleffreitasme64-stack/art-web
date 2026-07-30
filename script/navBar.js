function abrirMenu() {
    document.getElementById("nav-bar").classList.add("ativo");
    document.getElementById("overlay").classList.add("ativo");
}

function fecharMenu() {
    document.getElementById("nav-bar").classList.remove("ativo");
    document.getElementById("overlay").classList.remove("ativo");
}