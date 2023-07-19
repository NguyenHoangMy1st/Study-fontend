// viết 1 function tạo ra thông báo
function createNotification(title = "Welcome to notification") {
    const template = `<div class="noti">
    <img src="https://source.unsplash.com/random" alt="" class="noti-image">
    <div class="noti-content">
      <h3 class="noti-title">${}</h3>
      <p class="noti-desc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus veniam delectus dolores nemo perspiciatis porro optio accusantium, voluptatibus autem dolorem reiciendis omnis laboriosam atque ullam quis at ad fugiat necessitatibus!
      </p>
    </div>
  </div>`;
  // insertAdjacentHTML
    document.body.insertAdjacentHTML("afterbegin", template);
}
createNotification();
const timer = setInterval(function(){
    const item = document.querySelector(".noti");
    if(item){
        item.parentNode.removeChild(item);
    }
    createNotification();
}, 4000);



