const btnMenu = document.getElementById('btn-menu');
const nav = document.getElementById('nav');

// Função para alternar a visibilidade do menu e alterar o ícone
function toggleMenu() {
    nav.classList.toggle('active'); // Adiciona/remove a classe 'active'

    const icon = btnMenu.querySelector('i'); // Seleciona o ícone dentro do botão
    if (nav.classList.contains('active')) {
        // Se o nav tiver a classe 'active', muda para o ícone de 'fechar'
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        // Caso contrário, volta para o ícone de 'menu'
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

// Evento de clique no botão do menu
btnMenu.addEventListener('click', toggleMenu);

const navLinks = document.querySelectorAll('[href]');

// Função de rolagem suave
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Verifica se o href começa com "#"
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault(); // Previne o comportamento padrão

            // Obtém a seção de destino
            const targetSection = document.querySelector(this.getAttribute('href'));

            // Rolagem suave até a seção correspondente
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});