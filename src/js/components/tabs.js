const CLASS_ACTIVE = 'active';

const tabs = (() => {
  const tabsInit = () => {
    const wrapList = document.querySelectorAll('.js-tabs');

    if(!wrapList.length) return;
    wrapList.forEach(wrap => attachEvents(wrap));
    
    function attachEvents(parent) {
      const tabList = parent.querySelectorAll('.js-tabs-btn'),
            contentList = parent.querySelectorAll('[data-content]');
      if(!tabList.length) return;
      tabList.forEach(btn => {
        btn.addEventListener('click', (e) => {
          tabList.forEach(btn => btn.classList.remove(CLASS_ACTIVE));
          contentList.forEach(content => content.classList.remove(CLASS_ACTIVE));
  
          e.currentTarget.classList.add(CLASS_ACTIVE);
          const idContent = e.currentTarget.dataset.tab;
          const content = document.querySelector(`[data-content="${idContent}"]`);
          content.classList.add(CLASS_ACTIVE);
        });
      });
    }
  };

  const init = () => {
    tabsInit();
  };

  return {
    init,
  };
})();

export default tabs;
