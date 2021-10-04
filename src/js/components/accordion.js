const CLASS_TITLE = 'js-accordion-open';
const CLASS_CONTENT = 'js-content-accordion';
const CLASS_DESCRIPTION = 'js-accordion-description';
const CLASS_ACTIVE = 'active';
const CLASS_ACCORDION_ALL = 'js-accordion-all'; 
const ACCORDION_LIST = document.querySelectorAll('.js-accordion');

const accordion = (() => {
  const accordionInit = () => {

    ACCORDION_LIST.forEach(accordion => {
      const contentAccordion = accordion.querySelectorAll(`.${CLASS_CONTENT}`);
      const titleAccordion = accordion.querySelectorAll(`.${CLASS_TITLE}`);
      if (accordion.classList.contains(CLASS_ACCORDION_ALL)) {
        titleAccordion.forEach(title => {
          title.addEventListener('click', function () {
            showAccordion(this.dataset.accordion, contentAccordion, true);
            this.classList.toggle(CLASS_ACTIVE);
          });
        });
      } else {
        titleAccordion.forEach(title => {
          title.addEventListener('click', ({ target }) => {
            showAccordion(target.dataset.accordion, contentAccordion, false);
            if (target.classList.contains(CLASS_ACTIVE)) {
              title.classList.remove(CLASS_ACTIVE);
            } else {
              titleAccordion.forEach(title => title.classList.remove(CLASS_ACTIVE))
              title.classList.add(CLASS_ACTIVE);
            }
          });
        });
      }
    });

    function getDesctiptionHeight(currentAccordion) {
      const description = currentAccordion.querySelector(`.${CLASS_DESCRIPTION}`);
      const height = description.offsetHeight;
      const marginTop = +window.getComputedStyle(description).marginTop.replace('px', '');
      const marginBottom = +window.getComputedStyle(description).marginBottom.replace('px', '');
      
      return height + marginTop + marginBottom;
    }

    function showAccordion(toggle, contentAccordion, all) {
      const currentAccordion = document.getElementById(toggle);
      if (currentAccordion.classList.contains(CLASS_ACTIVE)) {
        currentAccordion.classList.remove(CLASS_ACTIVE);
        currentAccordion.style.maxHeight = '0';
      } else {
        const heightDescription = getDesctiptionHeight(currentAccordion);
        if(!all) {
          contentAccordion.forEach(content => {
            content.classList.remove(CLASS_ACTIVE);
            content.style.maxHeight = '0';
          });
        }
        currentAccordion.classList.add(CLASS_ACTIVE);
        currentAccordion.style.maxHeight = heightDescription + 'px';
      }
    };
  };

  const init = () => {
    if (ACCORDION_LIST.length > 0) {
      accordionInit();
    }
  };

  return {
    init,
  };
})();

export default accordion;
