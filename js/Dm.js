// função de tema claro e escuro do website
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
// menu no modo mobile()
function menu() {
    var mn = document.getElementById('menu');
    mn.style.display = 'block';
}
window.onclick = function (event) {
    const mn = document.getElementById('menu');
    const mnContent = document.querySelector('.menu-content');

    if (event.target === mn) {
        mn.style.display = 'none';
    }
};