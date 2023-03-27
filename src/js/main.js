//? src https://dev.to/nirazanbasnet/dont-use-100vh-for-mobile-responsive-3o97
//? resize each device height
const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
};


$(document).ready(function () {
  console.log('Hello Main.js Here!');
  documentHeight();
  //? onresize to reset setFontSize & documentHeight
  window.onresize = function () {
    documentHeight();
  };
});
