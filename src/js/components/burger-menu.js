const BURGER = document.querySelector('.js-burger-open');
const NAV = document.querySelector('.js-burger');
const BODY = document.querySelector('body');
const CLASS_OVERFLOW = 'overflow';
const CLASS_ACTIVE = 'active';

const burgerMenu = (() => {

  
  const burgeInit = () => {
    if(!BURGER) return;

    BURGER.addEventListener('click', () => {
      BURGER.classList.toggle(CLASS_ACTIVE);
      NAV.classList.toggle(CLASS_ACTIVE);
      BODY.classList.toggle(CLASS_OVERFLOW);
    });
  };

  const init = () => {
    burgeInit();
  };

  return {
    init,
  };
})();

export default burgerMenu;
