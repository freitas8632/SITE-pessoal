const defaultConfig = {
   page_title: "Bem-vindo à Minha Página!",
   
   subtitle: "Extrovertido, amigável e apaixonado por futebol",
   about_title: "Sobre Mim",
   routine_title: "Minha Rotina Diária",
   habits_title: "Hábitos e Atividades",
   passion_title: "Minha Paixão: Futebol",
   primary_color: "#667eea",
   secondary_color: "#764ba2",
   background_color: "#ffffff",
   text_color: "#333333",
   accent_color: "#FF6B6B",
   font_family: "Segoe UI",
   font_size: 16
 };

 async function onConfigChange(config) {
   const baseFont = config.font_family || defaultConfig.font_family;
   const baseFontSize = config.font_size || defaultConfig.font_size;
   const fontStack = `${baseFont}, Tahoma, Geneva, Verdana, sans-serif`;
   
   document.body.style.fontFamily = fontStack;
   
   const primaryColor = config.primary_color || defaultConfig.primary_color;
   const secondaryColor = config.secondary_color || defaultConfig.secondary_color;
   const backgroundColor = config.background_color || defaultConfig.background_color;
   const textColor = config.text_color || defaultConfig.text_color;
   const accentColor = config.accent_color || defaultConfig.accent_color;
   
   document.body.style.background = `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`;
   document.body.style.color = textColor;
   
   const sections = document.querySelectorAll('.section:not(.football-passion)');
   sections.forEach(section => {
     section.style.backgroundColor = backgroundColor;
   });
   
   const headers = document.querySelectorAll('.section h2');
   headers.forEach(header => {
     header.style.color = primaryColor;
   });
   
   const headerTitle = document.querySelector('.header h1');
   headerTitle.style.background = `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`;
   headerTitle.style.webkitBackgroundClip = 'text';
   headerTitle.style.webkitTextFillColor = 'transparent';
   headerTitle.style.backgroundClip = 'text';
   
   const passionSection = document.querySelector('.football-passion');
   passionSection.style.background = `linear-gradient(135deg, ${accentColor} 0%, ${primaryColor} 100%)`;
   
   document.getElementById('page-title').textContent = config.page_title || defaultConfig.page_title;
   document.getElementById('subtitle').textContent = config.subtitle || defaultConfig.subtitle;
   document.getElementById('about-title').textContent = config.about_title || defaultConfig.about_title;
   document.getElementById('routine-title').textContent = config.routine_title || defaultConfig.routine_title;
   document.getElementById('habits-title').textContent = config.habits_title || defaultConfig.habits_title;
   document.getElementById('passion-title').textContent = config.passion_title || defaultConfig.passion_title;
   
   document.getElementById('page-title').style.fontSize = `${baseFontSize * 3}px`;
   document.getElementById('subtitle').style.fontSize = `${baseFontSize * 1.25}px`;
   
   const sectionTitles = document.querySelectorAll('.section h2 span:not(.section-emoji)');
   sectionTitles.forEach(title => {
     title.style.fontSize = `${baseFontSize * 2}px`;
   });
   
   const paragraphs = document.querySelectorAll('.section p');
   paragraphs.forEach(p => {
     p.style.fontSize = `${baseFontSize * 1.125}px`;
     p.style.color = textColor;
   });
   
   const listItems = document.querySelectorAll('.routine-list li, .habits-list li');
   listItems.forEach(li => {
     li.style.fontSize = `${baseFontSize * 1.0625}px`;
   });
 }

 if (window.elementSdk) {
   window.elementSdk.init({
     defaultConfig,
     onConfigChange,
     mapToCapabilities: (config) => ({
       recolorables: [
         {
           get: () => config.primary_color || defaultConfig.primary_color,
           set: (value) => {
             config.primary_color = value;
             window.elementSdk.setConfig({ primary_color: value });
           }
         },
         {
           get: () => config.secondary_color || defaultConfig.secondary_color,
           set: (value) => {
             config.secondary_color = value;
             window.elementSdk.setConfig({ secondary_color: value });
           }
         },
         {
           get: () => config.background_color || defaultConfig.background_color,
           set: (value) => {
             config.background_color = value;
             window.elementSdk.setConfig({ background_color: value });
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
           get: () => config.accent_color || defaultConfig.accent_color,
           set: (value) => {
             config.accent_color = value;
             window.elementSdk.setConfig({ accent_color: value });
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
     }),
     mapToEditPanelValues: (config) => new Map([
       ["page_title", config.page_title || defaultConfig.page_title],
       ["subtitle", config.subtitle || defaultConfig.subtitle],
       ["about_title", config.about_title || defaultConfig.about_title],
       ["routine_title", config.routine_title || defaultConfig.routine_title],
       ["habits_title", config.habits_title || defaultConfig.habits_title],
       ["passion_title", config.passion_title || defaultConfig.passion_title]
     ])
   });
 }

 // Segundo Script (provavelmente para analytics ou anti-bot)
 (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9a078c5343ede018',t:'MTc2MzQ2OTc1MC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();