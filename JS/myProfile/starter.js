const aboutMe = document.querySelector(".aboutMe");
const yourImage = document.querySelector(".yourImage");
const showAboutMe = document.querySelector(".showAboutMe");
const imgs = document.querySelectorAll(".img");
const showImage = document.querySelector(".showImage");
aboutMe.addEventListener("click", function () {
  showImage.classList.remove("is-showImage");
  if (!showAboutMe.matches("is-showAboutMe")) {
    showAboutMe.classList.add("is-showAboutMe");
  } else {
    showAboutMe.classList.remove("is-showAboutMe");
  }
});

yourImage.addEventListener("click", function () {
  showAboutMe.classList.remove("is-showAboutMe");
  if (!showImage.matches("is-showImage")) {
    showImage.classList.add("is-showImage");
    [...imgs].forEach(item => item.addEventListener("click", function(e){
    const image = item.getAttribute("src"); 
    const template = `
    <div class="lightbox">
      <div class="lightbox-content">
        <img
          src="${image}"
          alt=""
          class="lightbox-image"
        />
      </div>
    </div>`;
      document.body.insertAdjacentHTML("beforeend", template);
    }))
  } else {
    showImage.classList.remove("is-showImage");
  }
});
document.addEventListener("click", function(e){
    const lightImage = document.querySelector(".lightbox-image");
    if (!lightImage) return;
    if (e.target.matches(".lightbox")) {
        e.target.parentNode.removeChild(e.target);          // remove lightbox ra khỏi dom
        // handle next image
    }
})
