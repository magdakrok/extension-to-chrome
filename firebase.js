var config = {
    apiKey: "AIzaSyBLwWhI5DKt9vFOfoNhA_Jfn1eBedbWRZI",
    authDomain: "cookbook-addec.firebaseapp.com",
    databaseURL: "https://cookbook-addec.firebaseio.com",
    storageBucket: "cookbook-addec.appspot.com",
};

chrome.runtime.onMessage.addListener((msg, sender, resp) => {

    if(msg.command == "cake"){
       alert("cake");
    }else if(msg.command == "other"){
      alert("other");
    }
  });


firebase.initializeApp(config);


function addCake(items) {
    let id=randomID();

    try{
    firebase.database().ref('/cake/'+id).set({
     title: items.title,
     http: items.http
    })
    console.log("add");
    alert("Ciasteczko dodane");
    
    }catch{
    console.log("Error");
}
  }

  function addOther(items) {
    let id=randomID();

    try{
    firebase.database().ref('/other/'+id).set({
     title: items.title,
     http: items.http
    })
    console.log("add");
    alert("Dania dodane");
    
    }catch{
    console.log("Error");
}
  }



function randomID(){
    let array = new Uint32Array(1);
    let id= window.crypto.getRandomValues(array);
    return id;
}


chrome.runtime.onMessage.addListener((msg, sender, resp) => {

    if(msg.command == "cake"){
        chrome.storage.sync.get(['title', 'http'], function(items) {
            console.log('Settings retrieved', items);
            addCake(items);
            
          });
    }else if(msg.command == "other"){
        chrome.storage.sync.get(['title', 'http'], function(items) {
            console.log('Settings retrieved', items);
            addOther(items);
            
          });
        }
});


