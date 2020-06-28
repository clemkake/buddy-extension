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
      // console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");
      callhere();
  }
});

// *://smbsalesimplementation.my.salesforce.com/*
function callhere(){
  chrome.tabs.query({url: '*://smbsalesimplementation.my.salesforce.com/*'}, function(tabs){
      // console.log(tabs);
  tabs.forEach(function(element) {
      // console.log(element.id);
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


chrome.runtime.onMessage.addListener(function(message, callback, sendResponse) {
  var user = '';
  if(message.data != ""){
    localStorage.setItem('user', message.data);
    user = localStorage.setItem('user', message.data);
  }
  user = localStorage.getItem('user')
  console.log('one',user);

  if (message.request == "livestatus") {

        console.log(user);
        if(user!= null){
            var fd = new FormData();    
            fd.append( 'qtype', 'livestatus' );
            fd.append( 'user', user );
              $.ajax({
                method: "POST",
                url: "https://google-wfm.regalix.com/salesforcetool/fetchMessage.php",
                data: fd,
                enctype:'multipart/form-data',
                processData: false,
                contentType: false,
              })
            .done(function(data) {
              console.log(data);
              sendResponse(data);
              // $('#login_btn_buddy').hide();
            })
        }

  }

});

chrome.runtime.onMessage.addListener(function(message, callback, sendResponse) {
  if (message.request == "multicheck") {
    console.log(message);
    var gd = new FormData();    
    gd.append( 'qtype', 'multicheck' );
    gd.append( 'agentName', message.data.agentName );
    gd.append( 'caseid', message.data.caseid );
    gd.append( 'status', message.data.status );
      $.ajax({
        method: "POST",
        url: "https://google-wfm.regalix.com/salesforcetool/fetchMessage.php",
        data: gd,
        enctype:'multipart/form-data',
        processData: false,
        contentType: false,
      })
    .done(function(data) {
      console.log(data);
      sendResponse(data);
      // $('#login_btn_buddy').hide();
    })
  }

  if (message.request == "multicheck-update") {
      console.log('regarde');
      var cd = new FormData();    
      cd.append( 'qtype', 'multicheck-update' );
      cd.append( 'caseid', message.data.caseid );
      cd.append( 'attr', message.data.attribute );
      cd.append( 'value', message.data.value );
        $.ajax({
          method: "POST",
          url: "https://google-wfm.regalix.com/salesforcetool/fetchMessage.php",
          data: cd,
          enctype:'multipart/form-data',
          processData: false,
          contentType: false,
        })
      .done(function(data) {
        console.log(data);
        sendResponse(data);
        // $('#login_btn_buddy').hide();
      })


  }
  return true;
})





chrome.runtime.onUpdateAvailable.addListener(function(details) {
  console.log("updating to version " + details.version);
  chrome.runtime.reload();
});



