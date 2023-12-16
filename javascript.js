let body = document.querySelector("#body");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");

btn1.addEventListener("click", function () {
  body.style.background = "#0278ae";
});
btn2.addEventListener("click", function () {
  body.style.background = "#ffd66b";
});
btn3.addEventListener("click", function () {
  body.style.background = "#e94560";
});
btn4.addEventListener("click", function () {
  body.style.background = "#61b15a";
});
btn5.addEventListener("click", function () {
  body.style.background = "#fff";
});
