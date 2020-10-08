var config = {
    apiKey: "AIzaSyBLwWhI5DKt9vFOfoNhA_Jfn1eBedbWRZI",
    authDomain: "cookbook-addec.firebaseapp.com",
    databaseURL: "https://cookbook-addec.firebaseio.com",
    storageBucket: "cookbook-addec.appspot.com",
};



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

function randomID(){
    let array = new Uint32Array(1);
    let id= window.crypto.getRandomValues(array);
    return id;
}


chrome.runtime.onMessage.addListener((msg, sender, resp) => {

    if(msg.command == "save"){
        chrome.storage.sync.get(['title', 'http'], function(items) {
            console.log('Settings retrieved', items);
            addCake(items);
            
          });
    }
});


