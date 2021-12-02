// index: select setting
let imgArr = document.querySelectorAll(".foodImg");
let prevBtn = document.querySelector("#prevBtn");
let nextBtn = document.querySelector("#nextBtn");
let foodDetail = document.querySelector("#foodDetail");
let selectIdx = 1;
loopClass(imgArr, selectIdx);
nextBtn.addEventListener("click", () => {
  addAnimationRight();
  detailRefresh();
  setTimeout(
    `
    removeAnimation();
    selectIdx--;
    removeLoopClass();
    selectIdx = loopClass(imgArr, selectIdx);
  `,
    1000
  );
});
prevBtn.addEventListener("click", () => {
  addAnimationLeft();
  detailRefresh();
  setTimeout(
    `
  removeAnimation();
  selectIdx++;
  removeLoopClass();
  selectIdx = loopClass(imgArr, selectIdx);
  `,
    1000
  );
});

function loopIdxs(length, idx) {
  // length most > 5
  let prevprev = idx - 2;
  let prev = idx - 1;
  let select = idx;
  let next = idx + 1;
  let nextnext = idx + 2;

  let idxArr = [prevprev, prev, select, next, nextnext];
  for (i in idxArr) {
    if (idxArr[i] < 0) {
      idxArr[i] += length;
    } else if (idxArr[i] >= length) idxArr[i] -= length;
  }
  return idxArr;
}

function loopClass(imgArr, selectIdx) {
  let [prevprev, prev, select, next, nextnext] = loopIdxs(
    imgArr.length,
    selectIdx
  );
  for (let i = 0; i < imgArr.length; i++) {
    switch (i) {
      case prevprev:
        imgArr[i].classList.add("prevprevImg");
        break;
      case prev:
        imgArr[i].classList.add("prevImg");
        break;
      case select:
        imgArr[i].classList.add("selectImg");
        imgArr[i].classList.add("animation-floating-ver");
        break;
      case next:
        imgArr[i].classList.add("nextImg");
        break;
      case nextnext:
        imgArr[i].classList.add("nextnextImg");
        break;
      default:
        imgArr[i].classList.add("unselectImg");
        break;
    }
  }
  return select;
}

function removeLoopClass() {
  for (i of imgArr) {
    "prevprevImg prevImg nextImg nextnextImg selectImg unselectImg animation-floating-ver"
      .split(" ")
      .forEach((c) => {
        i.classList.remove(c);
      });
  }
}

function addAnimationRight() {
  let prevprevImg = document.querySelector(".prevprevImg");
  let prevImg = document.querySelector(".prevImg");
  let selectImg = document.querySelector(".selectImg");
  let nextImg = document.querySelector(".nextImg");
  prevprevImg.classList.add("animation-shiftOp-r-05");
  prevImg.classList.add("animation-shiftScale-r-2");
  selectImg.classList.add("animation-shiftScale-r-05");
  nextImg.classList.add("animation-shiftOp-r-0");
}
function addAnimationLeft() {
  let prevImg = document.querySelector(".prevImg");
  let selectImg = document.querySelector(".selectImg");
  let nextImg = document.querySelector(".nextImg");
  let nextnextImg = document.querySelector(".nextnextImg");
  prevImg.classList.add("animation-shiftOp-l-0");
  selectImg.classList.add("animation-shiftScale-l-05");
  nextImg.classList.add("animation-shiftScale-l-2");
  nextnextImg.classList.add("animation-shiftOp-l-05");
}

function removeAnimation() {
  for (i of imgArr) {
    "animation-shiftOp-r-05 animation-shiftScale-r-2 animation-shiftScale-r-05 animation-shiftOp-r-0 animation-shiftOp-l-0 animation-shiftScale-l-05 animation-shiftScale-l-2 animation-shiftOp-l-05"
      .split(" ")
      .forEach((c) => {
        i.classList.remove(c);
      });
  }
}

function detailRefresh() {
  foodDetail.classList.remove("detailAnimation");
  setTimeout(`foodDetail.classList.toggle("detailAnimation")`, 500);
}
