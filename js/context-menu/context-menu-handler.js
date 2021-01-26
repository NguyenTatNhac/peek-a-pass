chrome.contextMenus.create({
  id: 'pap-copy',
  title: "Copy to clipboard",
  contexts: ["editable"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  chrome.tabs.sendMessage(tab.id, "getClickedEl", {frameId: info.frameId},
      data => {
        var dummy = document.createElement("input");
        document.body.appendChild(dummy);
        dummy.value = data.value;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
      });
});
