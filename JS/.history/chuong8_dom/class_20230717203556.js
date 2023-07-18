// 1. selector.classList.add("abc")
const container = document.querySelector(".container");
container.classList.add("is-active");
// 2. selector.classList.remove("abc")
container.classList.remove("container");
// 3. selector.classList.contains("container") -> check coi có container đó hay không (có -> true, không -> false)
console.log(container.classList.contains("container")); //fasle
console.log(!container.classList.contains("container")); //true
