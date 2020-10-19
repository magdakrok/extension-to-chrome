document.addEventListener('DOMContentLoaded', function () {
    
 
    let cake = document.getElementById("cake").addEventListener('click', onclickCake, false);
    let other = document.getElementById("other").addEventListener('click', onclickOther, false);
 

    function onclickCake(){
        goToScript();
        chrome.runtime.sendMessage({command: "cake", data: cake}, (response) => {
        });
       
    }
 
    function onclickOther(){
        goToScript();
        chrome.runtime.sendMessage({command: "other", data: cake}, (response) => {
    });
}


    function goToScript(){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
           
            chrome.tabs.executeScript({
             file: 'context.js'}, ()=>console.log("go to context file"))
             }); 
    }

   
}, false)









