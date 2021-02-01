document.addEventListener('DOMContentLoaded', function () {
    
 
    let cake = document.getElementById("cake").addEventListener('click', onclickCake, false);
    let salad= document.getElementById("salad").addEventListener('click', onclickCooking, false);
    let dinner= document.getElementById("dinner").addEventListener('click', onclickCooking, false);

 

    function onclickCake(){
        goToScript();
        chrome.runtime.sendMessage({command: "cake", data: cake}, (response) => {
           
        });
       
    }
 
    function onclickCooking(){
        goToScript();
        chrome.runtime.sendMessage({command: "salad", data: salad}, (response) => {
          
    });
}

    function onclickCooking(){
        goToScript();
        chrome.runtime.sendMessage({command: "dinner", data: dinner}, (response) => {
          
    });
}


    function goToScript(){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
           
            chrome.tabs.executeScript({
             file: 'context.js'}, ()=>console.log("go to context file"))
             }); 
    }

   
}, false)









