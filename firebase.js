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
    firebase.database().ref('/cake').set({
     title: 'babeczki',
     http: 'www.babeczki.pl'
    });
  }

  chrome.runtime.onMessage.addListener((msg, sender, resp) => {

    if(msg.command == "post"){
      writeUserData('ciasta', 'www.babeczki.pl')
      console.log("writeDataa");
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