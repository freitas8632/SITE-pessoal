const defaultConfig = {
  background_color: "#667eea",
  background_secondary: "#764ba2",
  card_background: "#ffffff",
  text_color: "#1a202c",
  primary_action: "#f59e0b",
  page_title: "Ramon Oaska de Freitas",
  tagline: "Vivendo com propósito e equilíbrio",
  about_title: "Quem Sou Eu",
  about_text: "Sou uma pessoa bem animada e gosto muito de fazer amizades. Sempre procuro deixar todo mundo ao meu redor bem e tento sempre resolver tudo na base da conversa e no entender o lado do outro. Gosto muito de esportes, principalmente Fórmula 1 e futebol. Torço para o Coritiba, time de futebol do Brasil, e gosto muito da equipe da Mercedes na Fórmula 1.",
  routines_title: "Minhas Rotinas",
  routine_1: "Jogar bola toda segunda e quarta",
  routine_2: "Rotina de estudos durante a semana",
  routine_3: "Correr durante a tarde na quarta-feira",
  habits_title: "Meus Hábitos",
  habit_1: "Projeto da Fundação CSN 4 dias da semana",
  habit_2: "Jogar video game às vezes na semana",
  habit_3: "Estudar todo dia de manhã",
  font_family: "system-ui",
  font_size: 16
};

async function onConfigChange(config) {
  const baseFontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  const customFont = config.font_family || defaultConfig.font_family;
  const baseSize = config.font_size || defaultConfig.font_size;

  document.documentElement.style.setProperty('--bg-color-1', config.background_color || defaultConfig.background_color);
  document.documentElement.style.setProperty('--bg-color-2', config.background_secondary || defaultConfig.background_secondary);
  document.documentElement.style.setProperty('--card-bg', config.card_background || defaultConfig.card_background);
  document.documentElement.style.setProperty('--text-color', config.text_color || defaultConfig.text_color);
  document.documentElement.style.setProperty('--primary-action', config.primary_action || defaultConfig.primary_action);

  document.getElementById('page-title').textContent = config.page_title || defaultConfig.page_title;
  document.getElementById('page-title').style.fontFamily = `${customFont}, ${baseFontStack}`;
  document.getElementById('page-title').style.fontSize = `${baseSize * 2}px`;

  document.getElementById('tagline').textContent = config.tagline || defaultConfig.tagline;
  document.getElementById('tagline').style.fontFamily = `${customFont}, ${baseFontStack}`;
  document.getElementById('tagline').style.fontSize = `${baseSize * 1.25}px`;

  document.getElementById('about-title').textContent = config.about_title || defaultConfig.about_title;
  document.getElementById('about-title').style.fontFamily = `${customFont}, ${baseFontStack}`;
  document.getElementById('about-title').style.fontSize = `${baseSize * 1.5}px`;

  document.getElementById('about-text').textContent = config.about_text || defaultConfig.about_text;
  document.getElementById('about-text').style.fontFamily = `${customFont}, ${baseFontStack}`;
  document.getElementById('about-text').style.fontSize = `${baseSize * 1.125}px`;

  document.getElementById('routines-title').textContent = config.routines_title || defaultConfig.routines_title;
  document.getElementById('routines-title').style.fontFamily = `${customFont}, ${baseFontStack}`;
  document.getElementById('routines-title').style.fontSize = `${baseSize * 1.5}px`;

  document.getElementById('routine-1').textContent = config.routine_1 || defaultConfig.routine_1;
  document.getElementById('routine-1').style.fontFamily = `${customFont}, ${baseFontStack}`;
  document.getElementById('routine-1').style.fontSize = `${baseSize * 1.125}px`;

  document.getElementById('routine-2').textContent = config.routine_2 || defaultConfig.routine_2;
  document.getElementById('routine-2').style.fontFamily = `${customFont}, ${baseFontStack}`;
  document.getElementById('routine-2').style.fontSize = `${baseSize * 1.125}px`;

  document.getElementById('routine-3').textContent = config.routine_3 || defaultConfig.routine_3;
  document.getElementById('routine-3').style.fontFamily = `${customFont}, ${baseFontStack}`;
  document.getElementById('routine-3').style.fontSize = `${baseSize * 1.125}px`;

  document.getElementById('habits-title').textContent = config.habits_title || defaultConfig.habits_title;
  document.getElementById('habits-title').style.fontFamily = `${customFont}, ${baseFontStack}`;
  document.getElementById('habits-title').style.fontSize = `${baseSize * 1.5}px`;

  document.getElementById('habit-1').textContent = config.habit_1 || defaultConfig.habit_1;
  document.getElementById('habit-1').style.fontFamily = `${customFont}, ${baseFontStack}`;
  document.getElementById('habit-1').style.fontSize = `${baseSize * 1.125}px`;

  document.getElementById('habit-2').textContent = config.habit_2 || defaultConfig.habit_2;
  document.getElementById('habit-2').style.fontFamily = `${customFont}, ${baseFontStack}`;
  document.getElementById('habit-2').style.fontSize = `${baseSize * 1.125}px`;

  document.getElementById('habit-3').textContent = config.habit_3 || defaultConfig.habit_3;
  document.getElementById('habit-3').style.fontFamily = `${customFont}, ${baseFontStack}`;
  document.getElementById('habit-3').style.fontSize = `${baseSize * 1.125}px`;
}

function mapToCapabilities(config) {
  return {
    recolorables: [
      {
        get: () => config.background_color || defaultConfig.background_color,
        set: (value) => {
          config.background_color = value;
          window.elementSdk.setConfig({ background_color: value });
        }
      },
      {
        get: () => config.background_secondary || defaultConfig.background_secondary,
        set: (value) => {
          config.background_secondary = value;
          window.elementSdk.setConfig({ background_secondary: value });
        }
      },
      {
        get: () => config.card_background || defaultConfig.card_background,
        set: (value) => {
          config.card_background = value;
          window.elementSdk.setConfig({ card_background: value });
        }
      },
      {
        get: () => config.text_color || defaultConfig.text_color,
        set: (value) => {
          config.text_color = value;
          window.elementSdk.setConfig({ text_color: value });
        }
      },
      {
        get: () => config.primary_action || defaultConfig.primary_action,
        set: (value) => {
          config.primary_action = value;
          window.elementSdk.setConfig({ primary_action: value });
        }
      }
    ],
    borderables: [],
    fontEditable: {
      get: () => config.font_family || defaultConfig.font_family,
      set: (value) => {
        config.font_family = value;
        window.elementSdk.setConfig({ font_family: value });
      }
    },
    fontSizeable: {
      get: () => config.font_size || defaultConfig.font_size,
      set: (value) => {
        config.font_size = value;
        window.elementSdk.setConfig({ font_size: value });
      }
    }
  };
}

function mapToEditPanelValues(config) {
  return new Map([
    ["page_title", config.page_title || defaultConfig.page_title],
    ["tagline", config.tagline || defaultConfig.tagline],
    ["about_title", config.about_title || defaultConfig.about_title],
    ["about_text", config.about_text || defaultConfig.about_text],
    ["routines_title", config.routines_title || defaultConfig.routines_title],
    ["routine_1", config.routine_1 || defaultConfig.routine_1],
    ["routine_2", config.routine_2 || defaultConfig.routine_2],
    ["routine_3", config.routine_3 || defaultConfig.routine_3],
    ["habits_title", config.habits_title || defaultConfig.habits_title],
    ["habit_1", config.habit_1 || defaultConfig.habit_1],
    ["habit_2", config.habit_2 || defaultConfig.habit_2],
    ["habit_3", config.habit_3 || defaultConfig.habit_3]
  ]);
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues
  });
}
