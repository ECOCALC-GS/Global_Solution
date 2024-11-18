function mudarTema() {
    var body = document.body;
    if (body.classList.contains("light-theme")) {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme")
    }
    else {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme")
    }
}

function menu() {
    var modal = document.getElementById('contatomodal');
    modal.style.display = 'block';
}
window.onclick = function (event) {
    const modal = document.getElementById('contatomodal');
    const modalContent = document.querySelector('.modal-content');

    if (event.target === modal) { // Se o clique for na área do fundo (modal)
        modal.style.display = 'none'; // Fecha o modal
    }
};