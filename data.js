import axios from './axios-instance';
import data from './context';


postDataHandler = () => {
    const cake ={
        title: data.title,
        http: data.http
    }
    axios.post('/recipes/cakes/cake.json', cake).
    then(response =>alert(response)).
    catch(error => alert(error))
}