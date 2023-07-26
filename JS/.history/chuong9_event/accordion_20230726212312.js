//
const accordionHeaders = document.querySelectorAll(".accordion-header");
[...accordionHeaders].forEach((item) =>
  item.addEventListener("click", handleClickAccordion)
);
const activeStr = "is-active";
function handleClickAccordion(e) {
  const content = e.target.nextElementSibling;                  // chọn được accordion-content
  console.log(content.scrollHeight);                            // chiều cao của phần tử 
  content.style.height = `${content.scrollHeight}px`;
  content.classList.toggle(activeStr);                          // thêm hoặc xóa class activeStr của accordion-content
  if (!content.classList.contains("is-active")) {
    content.style.height = "0px";
  }
  const icon = e.target.querySelector(".icon");                 // e.target là một accordion-header và có thể querySelector .icon
  icon.classList.toggle("fa-angle-down");
  icon.classList.toggle("fa-angle-up");
}
