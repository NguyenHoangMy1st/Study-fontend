window.addEventListener("load", function () {
    const input = document.querySelector(".input-search");
    const items = document.querySelectorAll(".dropdown-item");
    input.addEventListener("input", handleHighligh);
    // input sẽ lấy value mỗi khi chúng ta gõ
    // let filter = "";
    function handleHighligh(e) {
      // console.log(e.key);
      let filter = e.target.value;
      // console.log(filter);
      filter = filter.toLowerCase();
      [...items].forEach((item) => {
        const text = item.textContent;
        const index = text.toLowerCase().indexOf(filter);
        // console.log(index);
        if (index >= 0 && text.toLowerCase().startsWith(filter.charAt(0))) {
          item.innerHTML = `${text.substring(
            0,
            index
          )}<span class ="pimary">${text.substring(
            index,
            index + filter.length
          )}</span>${text.substring(index + filter.length)}`;
        }
      });
    }
  });