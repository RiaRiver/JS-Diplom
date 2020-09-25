import "./modules/polyfills";
import { viewSecondPhoneNumber } from "./modules/viewSecondPhoneNumber";
import { PopUp } from "./modules/PopUp";
import { setupSmoothScroll } from "./modules/setupSmoothScroll";
import { setupForms } from "./modules/setupForms";

// Показ второго телефона в шапке
viewSecondPhoneNumber();

// Инициализация моадльных окон
const popupMenu = new PopUp({
  popUpSelector: '[data-popup="menu"]',
  closeButtonsSelector: '[data-close="menu"]',
  openButtonsSelector: '[data-open="menu"]',
  activeClass: 'showHide-menu',
});

const popupRepairTypes = new PopUp({
  popUpSelector: '[data-popup="repair-types"]',
  closeButtonsSelector: '[data-close="repair-types"]',
  openButtonsSelector: '[data-open="repair-types"]',
  activeCSS: `
  [data-popup="repair-types"].active {
  visibility: visible;
  }
  `
});

const popupPrivacy = new PopUp({
  popUpSelector: '[data-popup="privacy"]',
  openButtonsSelector: '[data-open="privacy"]',
  closeButtonsSelector: '[data-close="privacy"]',
  activeCSS: `
  [data-popup="privacy"].active {
  visibility: visible;
  }
 `
});

const popupConsultation = new PopUp({
  popUpSelector: '[data-popup="consultation"]',
  openButtonsSelector: '[data-open="consultation"]',
  closeButtonsSelector: '[data-close="consultation"]',
  activeCSS: `
  [data-popup="consultation"].active {
  visibility: visible;
  }
 `
});

const popupThank = new PopUp({
  popUpSelector: '[data-popup="thank"]',
  closeButtonsSelector: '[data-close="thank"]',
  activeCSS: `
  [data-popup="thank"].active {
  visibility: visible;
  }
 `
});

// Настройка плавной прокрутки
setupSmoothScroll(popupMenu);

// Настройка отправки форм
setupForms(popupThank);
