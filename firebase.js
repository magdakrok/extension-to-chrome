var config = {
    apiKey: "AIzaSyBLwWhI5DKt9vFOfoNhA_Jfn1eBedbWRZI",
    authDomain: "cookbook-addec.firebaseapp.com",
    databaseURL: "https://cookbook-addec.firebaseio.com",
    storageBucket: "cookbook-addec.appspot.com",
};


firebase.initializeApp(config);


function addCake(items, type) {
    // let id=randomID();

    return new Promise ((resolve, reject) => {
        firebase.database().ref(`/${type}/`).push({
            title: items.title,
            http: items.http,
            photo: items.photo,
            favorite: false,
            notes: ""

          }).then(res => resolve(res))
          .catch(error => {
              console.log(error);
              reject(error)
          })
    })
  }

  // function addOther(items) {
  // //  let id=randomID();

  //   return new Promise ((resolve, reject) => {
  //       firebase.database().ref('/cooking/').push({
  //           title: items.title,
  //           http: items.http,
  //           photo: items.photo,
  //           favorite: false,
  //           notes: ""
  //         }).then(res => resolve(res))
  //         .catch(error => {
  //             console.log(error);
  //             reject(error);

  //         })
  //   })
// }

 
// function randomID(){
//     let array = new Uint32Array(1);
//     let id= window.crypto.getRandomValues(array);
//     return id;
// }

// callback to remove() just checks for errors
function onRemoved() {
    if (chrome.runtime.lastError) {
      console.log(chrome.runtime.lastError);
    } else {
      console.log("remove");
    }
}
  
  
chrome.runtime.onMessage.addListener(function (msg){

      let type = msg.command;
      console.log(`TYPE ${type}`);
       
            if((msg.command === "cake") || (msg.command === "salad") || (msg.command === "dinner")){
                
                chrome.storage.sync.get(['title', 'http', 'photo'], function(items) {
                    console.log('Settings retrieved', items);
                   
                  addCake(items, type)
                  .then(process => {alert("Przepis dodano!");
                  chrome.storage.sync.remove(["title", "http", "photo"], onRemoved)
                })

                  .catch(err => {alert("Error!"), console.log(err)});
                });
                // setTimeout(
                //     () => 
                   
                    // , 500);


            // }else if(msg.command == "cooking"){
               
      //           chrome.storage.sync.get(['title', 'http', 'photo'], function(items) {
      //               console.log('Settings retrieved', items);
      //               addOther(items)
      //             .then(process => alert("Przepis dodano!"))
      //             .catch(err => {alert("Error!"), console.log(err)});
      //           });
      //           setTimeout(
      //               () => chrome.storage.sync.remove(["title", "http", "photo"], onRemoved), 500);
                }
        
       return true;
});


