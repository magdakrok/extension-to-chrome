var config = {
    apiKey: "AIzaSyBLwWhI5DKt9vFOfoNhA_Jfn1eBedbWRZI",
    authDomain: "cookbook-addec.firebaseapp.com",
    databaseURL: "https://cookbook-addec.firebaseio.com",
    storageBucket: "cookbook-addec.appspot.com",
};


firebase.initializeApp(config);




function addCake(items) {
    let id=randomID();

    
  const database =  firebase.database().ref('/cake/'+id).set({
     title: items.title,
     http: items.http
    });

    database.then(
        respone => alert("Przepis dodany!"));
    //.catch((err) => console.log("error"));
    


    

    setTimeout(
        () => chrome.storage.local.remove(["title", "http"], onRemoved), 500);
  }

  function addOther(items) {
    let id=randomID();

    try{
    firebase.database().ref('/other/'+id).set({
     title: items.title,
     http: items.http
    })
    console.log("add");
    alert("Przepis dodany!");
    
    }catch{
    console.log("Error");
}
  }



function randomID(){
    let array = new Uint32Array(1);
    let id= window.crypto.getRandomValues(array);
    return id;
}

// callback to remove() just checks for errors
function onRemoved() {
    if (chrome.runtime.lastError) {
      console.log(chrome.runtime.lastError);
    } else {
      console.log("remove");
    }
  }
  
  


    chrome.runtime.onMessage.addListener(function (msg){

       
            if(msg.command == "cake"){
                
                chrome.storage.sync.get(['title', 'http'], function(items) {
                    console.log('Settings retrieved', items);
                   
                   setTimeout(() => addCake(items), 500);
                 
                    
                  });
            }else if(msg.command == "other"){
               
                chrome.storage.sync.get(['title', 'http'], function(items) {
                    console.log('Settings retrieved', items);
                    addOther(items);
                    chrome.storage.local.remove(["title", "http"], onRemoved);
                  });
                }
        
       return true;
});


