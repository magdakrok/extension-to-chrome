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