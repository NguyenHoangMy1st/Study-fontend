
const button = document.querySelector(".change");
const colors = ["#ffa400", "#00aefd", "#07a787", "#ffb86c", "#2979ff", "#e74c3c"];
function handleChangeColor(){
    // document.body.setAttribute("style", "background-color: red");
    // document.body.style.backgroundColor = "red";
    const color = colors[Math.random]
    document.body.style.backgroundColor = colors[]
}
button.addEventListener("click", handleChangeColor);