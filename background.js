// Copyright (c) 2009 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.event == "popup")
      sendResponse({action: "closed"});
});

// chrome.runtime.onInstalled.addListener(function() {
//   chrome.contextMenus.create({
//     "id": "BuddyMenu",
//     "title": "Menu",
//     "contexts": ["selection"]
//   });
// });

chrome.runtime.onInstalled.addListener(function(details){
  if(details.reason == "install"){
      console.log("This is a first install!");
      callhere();
  }else if(details.reason == "update"){
      var thisVersion = chrome.runtime.getManifest().version;
      console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");
      callhere();

  }
});

// *://smbsalesimplementation.my.salesforce.com/*
function callhere(){
  chrome.tabs.query({url: '*://smbsalesimplementation.my.salesforce.com/*'}, function(tabs){
      console.log(tabs);
  tabs.forEach(function(element) {
      console.log(element.id);
      chrome.tabs.reload(element.id)
  });
})
}

chrome.runtime.onMessage.addListener(function(message, callback, sendResponse) {
  if (message.request == "login") {

        var fd = new FormData();    
        fd.append( 'email', message.data );
        $.ajax({
            method: "POST",
            url: "https://usher.regalix.com/extension",
            data: fd,
            enctype:'multipart/form-data',
            processData: false,
            contentType: false,
          })
        .done(function(data) {
          console.log('aaaaaaa')
          console.log(data);
          sendResponse(data);
          // $('#login_btn_buddy').hide();
        })
  }
  return true;

});



chrome.runtime.onUpdateAvailable.addListener(function(details) {
  console.log("updating to version " + details.version);
  chrome.runtime.reload();
});



