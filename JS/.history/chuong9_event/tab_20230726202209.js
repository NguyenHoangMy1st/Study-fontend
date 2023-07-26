
window.addEventListener("load", function () {
    const tabItems = document.querySelectorAll(".tab-item");            // do có nhiều tabItem => querySelectorAll
    const tabsContent = document.querySelectorAll(".tab-content");
  
    function handleChangeTab(e) {
        // console.log(e.target);
        const tabId = e.target.dataset.tab;
        tabItems.forEach((el) => el.classList.remove("active"));
        e.target.classList.add("active");                               // đổi màu 
        tabsContent.forEach((el) => {
            el.classList.remove("active");
            if (el.getAttribute("data-tab") === tabId) {
                el.classList.add("active");
            }
        });
    }
    tabItems.forEach((el) => el.addEventListener("click", handleChangeTab));
  });
  