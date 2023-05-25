let _body = document.querySelector("#body")
let _color1 = document.querySelector(".color1")
let _color2 = document.querySelector(".color2")
let _css = document.querySelector("h3")

$setBackground = () => {
    _body.style.background = 
    "linear-gradient(to right, " 
    + _color1.value + ", "
    + _color2.value + ")";

    _css.textContent = body.style.background + ";";
}

_color1.addEventListener("input", $setBackground);
_color2.addEventListener("input", $setBackground);