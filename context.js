let title = document.querySelector("h1").innerText;
let http = document.URL;
 
const data = {
    title: title,
    http: http
}

chrome.storage.sync.set({'data': data}, function() {
 
})

chrome.storage.sync.get('data', function(){
 
})



