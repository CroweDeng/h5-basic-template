//? set fontSize
const setFontSize = () => {
  let width = document.documentElement.clientWidth;
  let range = 1200;
  //判斷視窗寬度 調整font-size
  if (width > range) {
    let scale = width / (range / 16);
    $("html").css("font-size", scale + "px");
  } else {
    $("html").css("font-size", "var(--base-font-size)");
  }
};

$(document).ready(function () {
  console.log("Hello Main.js Here!");
  //? set html base font size
  setFontSize();
  window.onresize = function () {
    setFontSize();
  };
});
