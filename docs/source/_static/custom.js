function resizeFrames() {
  const iframes = document.querySelectorAll("iframe");
  for (var i = 0; i < iframes.length; i++) {
    height = iframes[i].contentWindow.document.body.scrollHeight + 80;
    iframes[i].style.height = height + "px";
  }
}

window.addEventListener("DOMContentLoaded", function (e) {
  const iframe = document.querySelector("iframe");
  iframe.onload = () => {
    const styleSheet = iframe.contentDocument.styleSheets[0]
    if (styleSheet) {
      console.log(styleSheet.rules[1])
      // Darkmode is 2nd rule in the inline stylesheet containing it
      styleSheet.deleteRule(1)
    }
  }
  setTimeout(resizeFrames, 1000);
});
