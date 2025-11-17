const defaultConfig = {
    nome: "Ramon",
    sobre_titulo: "Sobre Mim",
    descricao_pessoal: "Sou uma pessoa extrovertida e amigável...",
    rotinas_titulo: "Minhas Rotinas",
    atividades_titulo: "Atividades Semanais",
    futebol_titulo: "Minha Paixão pelo Futebol",
    futebol_descricao: "O futebol faz parte da minha vida desde pequeno!",
    background_color: "#667eea",
    card_color: "#ffffff",
    text_color: "#2d3748",
    accent_color: "#4facfe",
    secondary_color: "#f093fb"
};

async function onConfigChange(config) {
    document.getElementById('nome').textContent = config.nome || defaultConfig.nome;
    document.getElementById('avatar').textContent = (config.nome || defaultConfig.nome).charAt(0).toUpperCase();
    document.getElementById('sobre-titulo').innerHTML = `<span class="card-icon">😊</span>${config.sobre_titulo || defaultConfig.sobre_titulo}`;
    document.getElementById('descricao-pessoal').textContent = config.descricao_pessoal || defaultConfig.descricao_pessoal;
    document.getElementById('rotinas-titulo').innerHTML = `<span class="card-icon">⏰</span>${config.rotinas_titulo || defaultConfig.rotinas_titulo}`;
    document.getElementById('atividades-titulo').innerHTML = `<span class="card-icon">⚽</span>${config.atividades_titulo || defaultConfig.atividades_titulo}`;
    document.getElementById('futebol-titulo').innerHTML = `<span class="card-icon">⚽</span>${config.futebol_titulo || defaultConfig.futebol_titulo}`;
    document.getElementById('futebol-descricao').textContent = config.futebol_descricao || defaultConfig.futebol_descricao;

    document.body.style.background = `linear-gradient(135deg, ${config.background_color || defaultConfig.background_color} 0%, #764ba2 100%)`;
}

if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig,
        onConfigChange
    });
}

function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in-element');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) element.classList.add('visible');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    onConfigChange(defaultConfig);
    handleScrollAnimations();
    window.addEventListener('scroll', handleScrollAnimations);
});
