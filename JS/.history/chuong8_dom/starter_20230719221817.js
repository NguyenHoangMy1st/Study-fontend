// viết 1 function tạo ra thông báo
function createNotification() {
    const template = `<div class="noti">
    <img src="https://source.unsplash.com/random" alt="" class="noti-image">
    <div class="noti-content">
      <h3 class="noti-title">Welcome to notification</h3>
      <p class="noti-desc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus veniam delectus dolores nemo perspiciatis porro optio accusantium, voluptatibus autem dolorem reiciendis omnis laboriosam atque ullam quis at ad fugiat necessitatibus!
      </p>
    </div>
  </div>`;
  // insertAdjacentHTML
    document.body.insertAdjacentHTML("afterbegin", template);
}
createNotification();


