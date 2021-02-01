var title = document.querySelector("h1").textContent;
var http = document.URL;
var queryPhoto = document.querySelectorAll('img');
var photo = "";


queryPhoto.forEach(queryPhoto => {
  if(queryPhoto.alt === title){
    console.log(queryPhoto.alt);
    console.log(title);
    photo = queryPhoto.currentSrc;
    console.log("photo", photo);
  }
});

console.log("tytuł", title);
console.log("http", http);
console.log("photo:", photo);

chrome.storage.sync.set({'title': title, 'http': http, 'photo': photo}, function() {
    console.log('Settings saved');
    console.log(photo, "photo");
    title = "";
    console.log(`tytuł ${title}`)

})



chrome.runtime.sendMessage({command: "save"}, (response) => {
    console.log("save: " +title );
  });




           

    
