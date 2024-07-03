/*!
 * nuggets JavaScript Library v3.7.0
 * https://nuggets.cooking/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://nuggets.cooking/license
 *
 * Date: 2023-12-15
 */



const N = {
	core: ['globals', 'nuggets', 'storyline'],
	customization: ['CustomCSS', 'GoogleFonts', 'Caption', 'CaptionBBCode', 'Lightbox'],
	features: ['Keys', 'LocalTrack', 'Timer'],
	webobjects: ['WebObject']
};

const webObjectFolder = window.location.href.match(/\w{11}(?!.*\w{11})/).toString();
const fullPath = `story_content/WebObjects/${webObjectFolder}/assets`;


const T = {
  "en": "ttt Loading Nuggets features",
  "fr": "Chargement de Nuggets",
  "es": "Cargando características de Nuggets",
  "de": "Laden von Nuggets-Funktionen",
  "it": "Caricamento delle funzionalità di Nuggets",
  "pt": "Carregando recursos do Nuggets",
  "zh": "加载 Nuggets 功能",
  "ja": "Nuggets 機能の読み込み",
  "ko": "Nuggets 기능 로드 중",
  "ru": "Загрузка функций Nuggets",
  "ar": "جارٍ تحميل ميزات Nuggets"
};


