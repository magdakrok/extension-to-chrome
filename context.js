let title = document.querySelector("h1").innerHTML;
let http = document.URL;
 
// let data = {
//     title: title,
//     http: http
// }

var config = {
    apiKey: "AIzaSyBLwWhI5DKt9vFOfoNhA_Jfn1eBedbWRZI",
    authDomain: "cookbook-addec.firebaseapp.com",
    databaseURL: "https://cookbook-addec.firebaseio.com",
    
  };

  firebase.initializeApp(config);

var database = firebase.database();

function writeUserData(title, http) {
    firebase.database().ref('/cake').set({
     title: 'ciasta',
     http: 'www.babeczki.pl'
    });
  }

// localStorage.setItem("data", JSON.stringify(data))



// const data = JSON.parse(localStorage.getItem("data"));
// console.log(data);
