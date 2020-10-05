const url="https://cookbook-addec.firebaseio.com/";


var config = {
    apiKey: "AIzaSyBLwWhI5DKt9vFOfoNhA_Jfn1eBedbWRZI",
    authDomain: "cookbook-addec.firebaseapp.com",
    databaseURL: "https://cookbook-addec.firebaseio.com",
    storageBucket: "cookbook-addec.appspot.com",
    
  };

  firebase.initializeApp(config);

var database = firebase.database();

function writeUserData(title, http) {
    let id=randomID();
    firebase.database().ref('/cake/'+id).set({
     title: title,
     http: http
    });
  }


  function randomID(){
   let array = new Uint32Array(1);
   let id= window.crypto.getRandomValues(array);
   return id;
  }

  chrome.runtime.onMessage.addListener((msg, sender, resp) => {

    if(msg.command == "post"){
      addCake('makowce', 'www.makowiec.pl')
      console.log("cake added");
    }
    // if(msg.command == "fetch"){
    //   var docRef = db.collection("cities").doc("LA");
    //   docRef.get().then(function(doc) {
    //       if (doc.exists) {
    //         //doc.data()
    //         resp({type: "result", status: "success", data: doc.data(), request: msg});
    //       } else {
    //           //No such document!
    //           resp({type: "result", status: "error", data: 'No such document!', request: msg});
    //       }
    //   }).catch(function(error) {
    //     //Error getting document:",error
    //     resp({type: "result", status: "error", data: error, request: msg});
    //   });
    // }
  
    // //submit  data..
    // if(msg.command == "post"){
    //  //...
    // }
  
    return true;
  
  
  })