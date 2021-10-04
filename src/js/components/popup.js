const POPUP_SHOW = document.querySelectorAll('.show-popup');
const POPUPS = document.querySelectorAll('[data-popup]');
const OVERLAY = document.querySelector('.js-overlay');
const BODY = document.querySelector('body');
const CLOSE_BTN = document.querySelectorAll('.js-popup-close');

const CLASS_ACTIVE = 'active';
const CLASS_OVERFLOW = 'overflow';

const popups = (() => {


  if(!POPUPS.length) return;

  
  function fadeOut(el, changeOpasity = -0.8) {
    if(!el) return; 

    requestAnimationFrame(function anim() {
      const opacity = +window.getComputedStyle(el).opacity;
      if(opacity <= 0) {
        el.style.opacity = 0;
        el.style.display = 'none';
        el.classList.remove(CLASS_ACTIVE);
        return;
      }

      el.style.opacity =  opacity + changeOpasity;

      if (opacity > 0 ) requestAnimationFrame(anim);
    });
  }

  function fadeIn(el, changeOpasity = 0.8) {
    if(!el) return; 

    el.style.display = 'block';
    el.classList.add(CLASS_ACTIVE);

    requestAnimationFrame(function anim() {
      const opacity = +window.getComputedStyle(el).opacity;
      if(opacity >= 1) {
        el.style.opacity = 1;
        return;
      }
      el.style.opacity =  opacity + changeOpasity;
      if (opacity < 1) requestAnimationFrame(anim);
    });
  }

  const hidePopup = () => {
    fadeOut(OVERLAY);
    BODY.classList.remove(CLASS_OVERFLOW);
    POPUPS.forEach(popup => fadeOut(popup));
  };

  const showPopup = (target) => {
    fadeIn(OVERLAY);
    BODY.classList.add(CLASS_OVERFLOW);
    const currentPopup = document.querySelector(`[data-popup="${target}"]`);
    fadeIn(currentPopup);
  };

  const showPopupInit = () => {

    if (POPUP_SHOW.length) {
      POPUP_SHOW.forEach(opener => {
        opener.addEventListener('click', function () {
          showPopup(this.dataset.trigger);
        });
      });
    }

    if (OVERLAY) {

      OVERLAY.addEventListener('click', () => {
        hidePopup();
      });
    }
    if (CLOSE_BTN.length) {
      CLOSE_BTN.forEach(closure => {
        closure.addEventListener('click', () => {
          hidePopup();
        });
      });
    }
  };

  const init = () => {
    if (POPUPS.length) {
      showPopupInit();
    }
  };

  return {
    init,
    showPopup,
  };
})();

export default popups;
