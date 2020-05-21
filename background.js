chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.executeScript(null, {file: 'js/peek-a-pass.js'});
});
