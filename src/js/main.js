//? src https://dev.to/nirazanbasnet/dont-use-100vh-for-mobile-responsive-3o97
//? resize each device height -> 適合mobile 使用
const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
};
//? 在mobile可以判斷button active或hover狀態 -> 適合mobile 使用
window.onload = function () {
  if (/iP(hone|ad)/.test(window.navigator.userAgent)) {
    document.body.addEventListener('touchstart', function () {}, false);
  }
};

//? set fontSize -> 適合Web使用
const setFontSize = () => {
  let width = document.documentElement.clientWidth;
  // console.log(width);
  let range = 1440;
  // 判斷視窗寬度 調整font-size
  if (width > range) {
    $('html').css('font-size', '16px');
  } else {
    let scale = width / (range / 16);
    $('html').css('font-size', scale > 12 ? scale : '12px');
  }
};

$(document).ready(function () {
  console.log('Hello Main.js Here!');
  documentHeight();
  //? onresize to reset setFontSize & documentHeight
  window.onresize = function () {
    documentHeight();
    setFontSize();
  };
});
