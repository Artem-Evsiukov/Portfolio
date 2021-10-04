// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import accordion from './components/accordion';
import tabs from './components/tabs';
import popups from './components/popup';
import burgerMenu from './components/burger-menu';
import scrollTo from './components/scroll-to';

(($) => {
  // When DOM is ready
  $(() => {
    accordion.init();
    tabs.init();
    popups.init();
    burgerMenu.init();
    scrollTo.init();

    $('.js-tabs-btn').on('click', function() {
      const idParent = $(this).closest('.ui-block').attr('id');

      scrollTo.top(idParent);
    });
  });
})(jQuery);

