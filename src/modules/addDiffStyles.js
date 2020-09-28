// Добавление осоых стилей для слайдеров
import { addStyle } from "./styles";

addStyle('js-slider', `
    .popup-active{
      visibility: visible;
    }
    
    @media (max-width: 1134px) {
      .nav-list {
        min-width: auto;
      }
    
      .nav-list svg{
        width: 96% !important;
      }
      
      .designs-nav__item{
        min-width: auto !important;
      }
      
      .scheme-nav__item{
        min-width: auto !important;
      }
    }
    
    @media (max-width: 768px) {
      #reviews-arrow_right {
        right: -40px;
      }
      
      #reviews-arrow_left {
        left: -40px;
      }
    }
      
    @media (max-width: 575px) {
      #reviews-arrow_right {
        right:55px;
      }
      #reviews-arrow_left {
        left: 55px;
      }
    }
`);
