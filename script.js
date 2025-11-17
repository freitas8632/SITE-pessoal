// ==== ANIMAÇÃO DE ENTRADA SUAVE PARA ELEMENTOS ==== 
window.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in-element");

  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("show");
    }, index * 150); // atraso suave entre elementos
  });
});

// ==== EXEMPLO DE INTERAÇÃO FUTURA ==== 
// Aqui você poderá adicionar futuramente funções como:
// - Modo escuro
// - Trocar tema de cores
// - Alterar avatar dinamicamente
// - Carregar dados de um JSON
// Me avise se quiser implementar algo disso!
