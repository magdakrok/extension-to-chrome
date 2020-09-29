

let title = document.querySelector("h1").innerText;
//alert(h);

let http = chrome.runtime.onMessage.addListener(function(request){
    //alert(http);
});

export const data = {
    title: title,
    http: http
}


