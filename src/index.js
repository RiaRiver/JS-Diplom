import "./modules/polyfills";
import { viewSecondPhoneNumber } from "./modules/viewSecondPhoneNumber";
import { PopUp } from "./modules/PopUp";

viewSecondPhoneNumber();

// Инициализация моадльных окон
const popupMenu = new PopUp({
  popUpSelector: '[data-popup="menu"]',
  closeButtonsSelector: '[data-close="menu"]',
  openButtonsSelector: '[data-open="menu"]',
  activeClass: 'showHide-menu',
});
