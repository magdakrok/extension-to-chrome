var config = {
    apiKey: "AIzaSyBLwWhI5DKt9vFOfoNhA_Jfn1eBedbWRZI",
    authDomain: "cookbook-addec.firebaseapp.com",
    databaseURL: "https://cookbook-addec.firebaseio.com",
    storageBucket: "cookbook-addec.appspot.com",
};

function addCake(items) {
    let id=randomID();
    firebase.database().ref('/cake/'+id).set({
     title: items.title,
     http: items.http
    });
  }

function randomID(){
    let array = new Uint32Array(1);
    let id= window.crypto.getRandomValues(array);
    return id;
}


chrome.storage.sync.get(['title', 'http'], function(items) {
    console.log('Settings retrieved', items);
    addCake(items);
    console.log("cake added");
  });

 firebase.initializeApp(config);
