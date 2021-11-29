// cooking:slide setting
let slideDiv = document.querySelector("#slideDiv");
if (slideDiv) {
  slideDiv.addEventListener("click", () => {
    if (slideDiv.classList.contains("slideShow")) {
      slideDiv.classList.add("slideHide");
      slideDiv.classList.remove("slideShow");
    } else if (slideDiv.classList.contains("slideHide")) {
      slideDiv.classList.remove("slideHide");
      slideDiv.classList.add("slideShow");
    } else {
      slideDiv.classList.add("slideShow");
    }
  });
}

// cooking: counter setting
let slideTitle = document.querySelector("#slideTitle");
let slideContent = document.querySelector("#slideContent");
let timeCounter = 12;
slideTitle.innerHTML = `残り ${timeCounter} 秒`;
setInterval(`timeCounter = countDown(timeCounter)`, 1000);
function countDown(timeCounter) {
  if (timeCounter > 0) {
    timeCounter--;
    slideTitle.innerHTML = `残り ${timeCounter} 秒`;
    if (timeCounter == 9) {
      slideContent.children[0].classList.add("dis-none");
      slideContent.children[1].classList.add("dis-none");
      slideContent.children[2].classList.remove("dis-none");
      slideContent.children[3].classList.remove("dis-none");
    }
    if (timeCounter == 1) {
      slideContent.children[2].classList.add("dis-none");
      slideContent.children[3].classList.add("dis-none");
      slideContent.children[4].classList.remove("dis-none");
      slideContent.children[5].classList.remove("dis-none");
    }
    return timeCounter;
  } else {
    slideTitle.innerHTML = `食事する`;
    slideTitle.classList.add("fw-b");
    slideTitle.style.color = "red";
    if (!slideDiv.classList.contains("slideShow")) {
      slideDiv.classList.remove("slideHide");
      slideDiv.classList.add("slideShow");
    }
  }
}
