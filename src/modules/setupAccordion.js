// Аккордион
export const setupAccordion = () => {
  const accordion = document.getElementById('js-accordion');
  accordion.addEventListener('click', event => {
    const target = event.target;
    if (target.dataset.open === 'accordion') {
      target.classList.toggle('msg-active');
    }
  });
};
