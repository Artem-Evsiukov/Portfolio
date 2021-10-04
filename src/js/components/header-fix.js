const $header = $('.header');

const HEIGHT_SCROLL = 200;
const CLASS_FIXED = 'fixed';

const headerFixed = (() => {
  const headerFixedUnit = () => {
    $(window).scroll(() => {
      if ($(window).scrollTop() > HEIGHT_SCROLL) {
        $header.addClass(CLASS_FIXED);
      } else {
        $header.removeClass(CLASS_FIXED);
      }
    });
  };

  const init = () => {
    headerFixedUnit();
  };

  return {
    init,
  };
})();

export default headerFixed;
