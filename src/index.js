import "./modules/polyfills";
import { viewSecondPhoneNumber } from "./modules/viewSecondPhoneNumber";
import { PopUp } from "./modules/PopUp";
import { setupSmoothScroll } from "./modules/setupSmoothScroll";
import { setupForms } from "./modules/setupForms";
import { setupAccordion } from "./modules/setupAccordion";
import { maskPhone } from "./modules/maskPhone";

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
  activeClass: 'popup-active'
});

const popupPrivacy = new PopUp({
  popUpSelector: '[data-popup="privacy"]',
  openButtonsSelector: '[data-open="privacy"]',
  closeButtonsSelector: '[data-close="privacy"]',
  activeClass: 'popup-active'
});

const popupConsultation = new PopUp({
  popUpSelector: '[data-popup="consultation"]',
  openButtonsSelector: '[data-open="consultation"]',
  closeButtonsSelector: '[data-close="consultation"]',
  activeClass: 'popup-active'
});

const popupDesign = new PopUp({
  popUpSelector: '[data-popup="design"]',
  openButtonsSelector: '[data-open="design"]',
  closeButtonsSelector: '[data-close="design"]',
  activeClass: 'popup-active',
  disactiveClass: 'hide'
});
const popupTransparency = new PopUp({
  popUpSelector: '[data-popup="transparency"]',
  openButtonsSelector: '[data-open="transparency"]',
  closeButtonsSelector: '[data-close="transparency"]',
  activeClass: 'popup-active',
  disactiveClass: 'hide'
});

const popupPortfolio = new PopUp({
  popUpSelector: '[data-popup="portfolio"]',
  closeButtonsSelector: '[data-close="portfolio"]',
  activeClass: 'popup-active',
  disactiveClass: 'hide'
});

const popupThank = new PopUp({
  popUpSelector: '[data-popup="thank"]',
  closeButtonsSelector: '[data-close="thank"]',
  activeClass: 'popup-active'
});

// Настройка плавной прокрутки
setupSmoothScroll(popupMenu);

// Настройка отправки форм
setupForms(popupThank);

// Настройка аккордеона
setupAccordion();

// Установка маски для полей с телефоном
const phoneInputs = document.querySelectorAll('[name="phone"]');
phoneInputs.forEach(input => maskPhone(input));
