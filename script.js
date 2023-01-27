"use strict";

let button = document.querySelector("button");
let plane = document.querySelector("button img");
let msg = document.querySelector(".msg");
let point = document.querySelector(".point");

function animation() {
  plane.classList.add("move-plane");
  plane.style.animationName = "movePlane";
  point.style.animationName = "movePlane";
  button.style.animationName = "circleForm";
  button.classList.add("send");
  setTimeout(function () {
    plane.style.animationName = "";
    plane.classList.remove("move-plane");
    plane.classList.add("hide");
    button.style.animationName = "";
  }, 500);

  setTimeout(function () {
    plane.src = "./images/check.svg";
    plane.classList.add("check");
    button.classList.add("check");
    msg.classList.add("check");
  }, 600);

  button.removeEventListener("click", animation);
}

button.addEventListener("click", animation);
