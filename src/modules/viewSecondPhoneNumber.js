// Показ второго номер телефона в шапке
import { addStyle } from "./styles";

export const viewSecondPhoneNumber = () => {
  const phoneArrowButton = document.querySelector('#js-phone-arrow');
  const phoneNumberAccord = document.querySelector('#js-phone-number-accord');

  addStyle('js-styles', `
  #js-phone-arrow.active img {
  transform: rotate(180deg);
  }
  
  #js-phone-number-accord.active {
  top: 30px;
  }
  
  #js-phone-number-accord.active a {
    opacity: 1;
  }
  `);

  phoneArrowButton.addEventListener('click', () => {
    phoneArrowButton.classList.toggle('active');
    phoneNumberAccord.classList.toggle('active');
  });
};
