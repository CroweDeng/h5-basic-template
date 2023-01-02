//? set fontSize
const setFontSize = (device, range) => {
  // mobile range = 414;
  // desktop range = 1200;
  let width = document.documentElement.clientWidth;
  switch (device) {
    case "mobile":
      //判斷視窗寬度 調整font-size
      if (width > range) {
        let scale = width / (range / 16);
        $("html").css("font-size", scale + "px");
      } else {
        $("html").css("font-size", "16px");
      }
      break;
    case "desktop":
      //判斷視窗寬度 調整font-size
      if (width >= 1920) {
        $("html").css("font-size", "16px");
      } else if (width > range) {
        let scale = width / (range / 12);
        $("html").css("font-size", scale + "px");
      } else {
        $("html").css("font-size", "10px");
      }
      break;
  }
};

//? src https://dev.to/nirazanbasnet/dont-use-100vh-for-mobile-responsive-3o97
//? resize each device height
const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};

$(document).ready(function () {
  console.log("Hello Main.js Here!");
  //? set html base font size
  setFontSize();
  window.onresize = function () {
    setFontSize("desktop", "1200");
    documentHeight();
  };
});
