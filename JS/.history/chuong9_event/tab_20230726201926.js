
window.addEventListener("load", function () {
    const tabItems = document.querySelectorAll(".tab-item");            // do có nhiều tabItem => querySelector
    const tabsContent = document.querySelectorAll(".tab-content");
  
    function handleChangeTab(e) {
      const tabId = e.target.dataset.tab;
      tabItems.forEach((el) => el.classList.remove("active"));
      e.target.classList.add("active");
      tabsContent.forEach((el) => {
        el.classList.remove("active");
        if (el.getAttribute("data-tab") === tabId) {
          el.classList.add("active");
        }
      });
    }
    tabItems.forEach((el) => el.addEventListener("click", handleChangeTab));
  });
  