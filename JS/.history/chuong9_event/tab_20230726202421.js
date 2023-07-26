
window.addEventListener("load", function () {
    const tabItems = document.querySelectorAll(".tab-item");            // do có nhiều tabItem => querySelectorAll
    const tabsContent = document.querySelectorAll(".tab-content");
  
    function handleChangeTab(event) {
        // console.log(event.target);
        const tabId = event.target.dataset.tab;
        tabItems.forEach((item) => item.classList.remove("active"));
        event.target.classList.add("active");                               // khi click vào -> add active
        tabsContent.forEach((el) => {
            el.classList.remove("active");
            if (el.getAttribute("data-tab") === tabId) {
                el.classList.add("active");
            }
        });
    }
    tabItems.forEach((el) => el.addEventListener("click", handleChangeTab));
  });
  