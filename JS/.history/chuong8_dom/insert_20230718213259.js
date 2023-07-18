// 1. element.insertAdjacentText("position", "text")
const h3 = document.querySelector("h3");
// h3.insertAdjacentText("position", "text");  
// position: beforebegin, afterbegin, beforeend, afterend
h3.insertAdjacentText("beforebegin", "begin");

// 2. element.insertAdjacentElement("position", node)
const strong = document.createElement("strong");
strong.classList.add("bold");
h3.insertAdjacentElement("beforeend", strong);

// 3. element.insertAdjacentHTML("postion", )
/*

*/
const template = `
<ul class="menu">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
</ul>
`;
document.body.insertAdjacentHTML("afterbegin", template);
// parse
