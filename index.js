var front = document.getElementsByClassName("front");
var back = document.getElementsByClassName("back");

const page1 = document.getElementById("p1");
const page2 = document.getElementById("p2");
const page3 = document.getElementById("p3");

const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
const menu = document.getElementsByClassName("menu");
var currentLocation = 1;
var numOfPages = 3;
var maxLocation = numOfPages + 1;

function openBook() {
  menu[0].style.transform = "translateX(50%)";
  leftBtn.style.transform = "translateX(-155px)";
  rightBtn.style.transform = "translateX(155px)";
}
function closeBook(isAtBeg) {
  if (isAtBeg) {
    menu[0].style.transform = "translateX(0%)";
  } else {
    menu[0].style.transform = "translateX(100%)";
  }
  leftBtn.style.transform = "translateX(0px)";
  rightBtn.style.transform = "translateX(0px)";
}

function left() {
  if (currentLocation > 1) {
    switch (currentLocation) {
      case 2:
        closeBook(true);
        page1.classList.remove("flipped");
        page1.style.zIndex = 3;

        break;
      case 3:
        page2.classList.remove("flipped");
        page2.style.zIndex = 2;
        break;
      case 4:
        openBook();
        page3.classList.remove("flipped");
        page3.style.zIndex = 1;
        break;
      default:
        console.log("Some error");
    }
    currentLocation--;
  }
}
function right() {
  if (currentLocation < maxLocation) {
    switch (currentLocation) {
      case 1:
        openBook();
        page1.className += " flipped";
        page1.style.zIndex = 1;
        break;
      case 2:
        page2.className += " flipped";
        page2.style.zIndex = 2;
        break;
      case 3:
        closeBook(false);
        page3.className += " flipped";
        page3.style.zIndex = 3;

        break;
      default:
        console.log("Some error");
    }
    currentLocation++;
  }
}
