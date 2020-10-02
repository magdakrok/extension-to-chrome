document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("button").addEventListener('click',
    onclick, false)
    
    function onclick(){
        
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
       
        chrome.tabs.executeScript(
         {file: 'firebase.js'}, ()=>console.log("go to context file"))

            
            
        });
    }
}, false)