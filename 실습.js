"use strict";

const bannerBox = document.querySelector("#bannerBox > ul");
const bannerItem = document.querySelectorAll(".banner_item");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

const size = 1280;

let cnt = 0;

//auto banner
next.addEventListener("click", () => {
  if (cnt < bannerItem.length - 1) {
    cnt++;
    bannerBox.style.transform = "translateX(" + -size * cnt + "px)";
  } else if (cnt === bannerItem.length - 1) {
    cnt = 0;
    bannerBox.style.transform = "translateX(" + -size * cnt + "px)";
  }
});

prev.addEventListener("click", () => {
  if (cnt > 0) {
    cnt--;
    bannerBox.style.transform = "translateX(" + -size * cnt + "px)";
  }
});

setInterval(() => {
  if (cnt < bannerItem.length - 1) {
    cnt++;
    bannerBox.style.transform = "translateX(" + -size * cnt + "px)";
  } else if (cnt == bannerItem.length - 1) {
    cnt = 0;
    bannerBox.style.transform = "translateX(" + -size * cnt + "px)";
  }
}, 3000);

//mouse tracker
const font = document.getElementById("font");
const container = document.getElementById("container");

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  console.log(mouseX, mouseY);
  if (mouseY > 48 && mouseX < 1800) {
    font.style.display = "block";
    font.style.left = mouseX + "px";
    font.style.top = mouseY + "px";
  } else {
    font.style.display = "none";
  }
});

container.addEventListener("click", () => {
  if (font.innerText == "PAUSE") {
    font.innerText = "PLAY";
  } else {
    font.innerText = "PAUSE";
  }
});

// fullscreen
window.addEventListener("wheel", (e) => {
  console.log(e);
  if (e.deltaY > 0) {
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  } else {
    window.scrollBy({
      top: -window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  }
});

//hidemenu
const header = document.getElementById("header");
const hidemenu = document.querySelector(".hidemenu");
console.log(header);

header.addEventListener("mouseover", () => {
  if (hidemenu.classList.contains("on")) {
    hidemenu.classList.remove("on");
  } else {
    hidemenu.classList.add("on");
  }
});

hidemenu.addEventListener("mouseleave", () => {
  if (hidemenu.classList.contains("on")) {
    hidemenu.classList.remove("on");
  } else {
    hidemenu.classList.add("on");
  }
});
