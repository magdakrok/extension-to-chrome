let title = document.querySelector("h1").innerHTML;
let http = document.URL;



chrome.storage.sync.set({'title': title, 'http': http}, function() {
    console.log('Settings saved');
  });


chrome.runtime.sendMessage({command: "save"}, (response) => {
    console.log("save");
  });

