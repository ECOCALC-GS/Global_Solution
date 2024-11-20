// Função de tema claro e escuro do website
function mudarTema() {
    var body = document.body;
    if (body.classList.contains("light-theme")) {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
    }
    else {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
    }
}

// Menu no modo mobile
function menu() {
    var mn = document.getElementById('menu');
    mn.style.display = 'block';
}

// Função para exibir os comentários
function comentar() {
    var cm = document.getElementById('coment');
    cm.style.display = 'block';
}

// Manipulador de clique para fechar o menu ou o comentário quando clicar fora
window.onclick = function (event) {
    const mn = document.getElementById('menu');
    const cm = document.getElementById('coment');

    // Se clicar fora do menu, esconder o menu
    if (event.target === mn) {
        mn.style.display = 'none';
    }

    // Se clicar fora do comentário, esconder o comentário
    if (event.target === cm) {
        cm.style.display = 'none';
    }
};
