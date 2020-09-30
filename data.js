import axios from './axios-instance';
// import data from './context';


// let dat = localStorage.getItem('data');

// alert(dat.title);


const data = JSON.parse(localStorage.getItem("data"));
console.log(data);

// postDataHandler = () => {

    const cake ={
        title: data.title,
        http: data.http
    }
    axios.post('/recipes/cakes/cake.json', cake).
    then(response =>alert(response)).
    catch(error => alert(error))
// }