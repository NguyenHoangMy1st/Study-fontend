//  js sự kiện xảy ra đầu tiên theo thứ tự keydown > keypress > keyup
// Những sự kiện hay dùng cho thẻ input, textarea
// 1.keydown : hoạt động  khi nhấn bàn phím xuống
const input = document.querySelector(".input");
input.addEventListener("keydown", function (e) {
  // e.key : key nhập vào
  // console.log(e.key);
  // Khuyên cáo ít nên dùng keycode và which
  // console.log(e.keyCode);
  // console.log(e.which);
  // ascii
  // /*  Bài tập nhỏ
  // if (e.key === "Enter") {
  //   console.log("You are press the enter");
  // } else {
  //   console.log(e.key);
  // }
  // */
  // if (e.key === "Home") {
  //   console.log("say hi");
  // }
});

// 2.keyup:Sự kiện này sẽ xảy ra khi nhấn phím rồi thả ra
input.addEventListener("keyup", function (e) {
  // console.log(e.key);
});

// 3.keypress: sự kiện này xảy ra khi các bạn nhấn phím
// keypress sẽ ignore các phím như delete , mũi tên, page up, page dơn, home, end, ctrl, alt, shift,esc
input.addEventListener("keypress", function (e) {
  // console.log(e.key);
  //// không hoạt động
  // if (e.key === "Home") {
  //   console.log("say hi");
  // }
});

// 4.change : xảy ra khi gõ xong nhấn Enter hoặc nhấn chuột ra ngoài 1 lần
input.addEventListener("change", function (e) {
  // console.log("hihi");
});

// 5.focus -> nhấn vào trong
input.addEventListener("focus", function (e) {
  // console.log("input is focusing");
});

// 6.blur -> từ focus nhấn ra ngoài
input.addEventListener("blur", function (e) {
  // console.log("input is bluring");
});

// 7.submit form
const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // if (input.value === "") {
  //   alert("you can't make empty input");
  // }

  // this, e.target -> chọn ra slector mà chúng ta đang add sự kiện
  // console.log(this);
  // console.log(e.target);
  // this.element
  // console.log(this.elements["username"].value);
  // const username = this.elements["username"].value;
  // const gender = this.elements["gender"].value;
  // const hobby = this.querySelectorAll(`input[name="hobby"]`);
  // let hobbyValues = [];
  // [...hobby].forEach((item) => hobbyValues.push(item.value));
  // console.log(hobbyValues);
  // console.log({ username, gender, hobbyValues });

  // phần Validation
  const username = this.elements["username"].value;
  const password = this.elements["password"].value;
  if (!username) {
    alert("Please enter your username");
    return;
  }
  if (!password) {
    alert("Please enter your password");
    return;
  }
  if (password.length < 5) {
    alert("Password so short");
  }
});

// 8.Validation
// email: abc@gmail.com
// Regular expression