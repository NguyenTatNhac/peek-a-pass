var selectedValue = "";

document.addEventListener("contextmenu", function (event) {
  selectedValue = event.target.value;
}, true);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request === "getClickedEl") {
    sendResponse({value: selectedValue});
  }
});
