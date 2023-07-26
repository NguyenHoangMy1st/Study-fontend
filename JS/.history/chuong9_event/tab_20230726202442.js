
window.addEventListener("load", function () {
    const tabItems = document.querySelectorAll(".tab-item");            // do có nhiều tabItem => querySelectorAll
    const tabsContent = document.querySelectorAll(".tab-content");
  
    function handleChangeTab(event) {
        // console.log(event.target);
        const tabId = event.target.dataset.tab;
        tabItems.forEach((item) => item.classList.remove("active"));        // xóa hết tất cả class active ở các tab-item
        event.target.classList.add("active");                               // khi click vào -> add active
        tabsContent.forEach((item) => {
            el.classList.remove("active");
            if (el.getAttribute("data-tab") === tabId) {
                el.classList.add("active");
            }
        });
    }
    tabItems.forEach((item) => item.addEventListener("click", handleChangeTab));
  });
  