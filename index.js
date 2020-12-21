chrome.contextMenus.removeAll(function() {
  chrome.contextMenus.create({
    "title": "Magic Code",
    "contexts": ["selection"],
    "onclick": function(info) {
      chrome.tabs.create({ url: `https://nhentai.net/g/${info.selectionText}` });
    }
  });
});