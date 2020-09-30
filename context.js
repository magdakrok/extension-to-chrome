const src = chrome.extension.getURL('axios-instance.js');
const axios =  import(src);

let title = document.querySelector("h1").innerHTML;
let http = document.URL;
 
let data = {
    title: title,
    http: http
}



localStorage.setItem("data", JSON.stringify(data));

postDataHandler = () => {

    const cake ={
        title: data.title,
        http: data.http
    }

    

    
    axios.post('recipes/cakes/cake.json',cake).
    then(response =>alert(response)).
    catch(error => alert(error))
  


    
}