let h = document.querySelector("h1").innerText;
alert(h);

chrome.runtime.onMessage.addListener(function(request){
    alert(request);
})
