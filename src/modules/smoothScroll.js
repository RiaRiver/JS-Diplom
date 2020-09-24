// Плавная прокрутка к элементу
export const smoothScroll = elem => {
  elem.scrollIntoView({behavior: 'smooth'});
};