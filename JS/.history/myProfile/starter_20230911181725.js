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

const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = this.elements["username"].value;
  const password = this.elements["password"].value;
  if (!username) {
    alert("please enter your username");
    return;
  }
  if (!password) {
    alert("please enter your password");
    return;
  }
  if (password.length <= 3) {
    alert("too short");
    return;
  }